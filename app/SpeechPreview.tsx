import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useRef } from "react";

function SpeechPreview() {
  const [isListening, setIsListening] = useState(false);
  const [transcription, setTranscription] = useState("");
  const [audioLevels, setAudioLevels] = useState([]);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const mediaStreamRef = useRef(null);

  useEffect(() => {
    if (isListening) {
      startAudioVisualization();
      startSpeechRecognition();
    } else {
      stopAudioVisualization();
    }

    return () => stopAudioVisualization();
  }, [isListening]);

  const startAudioVisualization = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);
      analyser.fftSize = 256;
      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      analyserRef.current = { analyser, dataArray };
      audioContextRef.current = audioContext;

      const visualize = () => {
        analyser.getByteFrequencyData(dataArray);
        const levels = Array.from(dataArray.slice(0, 15)).map(
          (value) => value / 255
        );
        setAudioLevels(levels);
        if (isListening) requestAnimationFrame(visualize);
      };

      visualize();
    } catch (err) {
      console.error("Error accessing microphone:", err);
    }
  };

  const stopAudioVisualization = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
    setAudioLevels([]);
  };

  const startSpeechRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition API is not supported in your browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let liveTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          setTranscription((prev) => prev + transcript + " ");
          document
            .getElementById("transcript")
            ?.scrollTo({ left: 9999, behavior: "smooth" });
        } else {
          liveTranscript += transcript;
        }
      }
      setTranscription((prev) => prev + liveTranscript);
      document
        .getElementById("transcript")
        ?.scrollTo({ left: 9999, behavior: "smooth" });
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.start();
  };

  return (
    <div className="flex-1 bg-gray-100 px-5 py-5 rounded-3xl overflow-hidden">
      {!isListening && (
        <div className="flex items-center justify-center pt-5">
          <Button
            onClick={() => setIsListening(!isListening)}
            className={`text-white font-bold`}
          >
            {isListening ? "Stop Listening" : "Tap to Speak"}
          </Button>
        </div>
      )}

      <div className="mt-4">
        <div className="flex flex-row-reverse items-center justify-center gap-1 h-6">
          {audioLevels.map((level, index) => (
            <div
              key={index}
              className="w-2 bg-black rounded-full min-h-1"
              style={{ height: `${level * 100}%` }}
            ></div>
          ))}
        </div>
        <p
          id="transcript"
          className="mt-4 text-gray-700 whitespace-nowrap overflow-x-auto text-center scrollbar-hidden opacity-30"
        >
          {transcription || "Start speaking to see the transcription..."}
        </p>
      </div>
    </div>
  );
}

export default SpeechPreview;
