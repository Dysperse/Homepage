import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useRef } from "react";

function SpeechPreview() {
  const [isListening, setIsListening] = useState(false);
  const [transcription, setTranscription] = useState("");
  const [audioLevels, setAudioLevels] = useState([]);
  const audioContextRef = useRef(null);
  const analyserRef: any = useRef(null);
  const mediaStreamRef: any = useRef(null);

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
        (window as any).webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);
      analyser.fftSize = 256;
      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      analyserRef.current = { analyser, dataArray };
      (audioContextRef as any).current = audioContext;

      const visualize = () => {
        analyser.getByteFrequencyData(dataArray);
        const levels = Array.from(dataArray.slice(0, 15)).map(
          (value) => value / 255
        );
        setAudioLevels(levels as any);
        if (isListening) requestAnimationFrame(visualize);
      };

      visualize();
    } catch (err) {
      alert(
        "Unfortunately, your browser does not support audio visualization 😔💔 (but the dysperse app does!)"
      );
    }
  };

  const stopAudioVisualization = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track: any) => track.stop());
    }
    if (audioContextRef.current) {
      (audioContextRef as any).current.close();
    }
    setAudioLevels([]);
  };

  const startSpeechRecognition = () => {
    setInterval(() => {
      document
        .getElementById("transcript")
        ?.scrollTo({ left: 9999, behavior: "smooth" });
    }, 1000);
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition API is not supported in your browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event: any) => {
      let liveTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          setTranscription((prev) => prev + transcript + " ");
        } else {
          liveTranscript += transcript;
        }
      }
      setTranscription((prev) => prev + liveTranscript);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.start();
  };

  return (
    <div className="flex-1 bg-gray-100 px-5 py-5 pb-0 rounded-3xl overflow-hidden relative h-1/2">
      {!isListening && (
        <div className="flex items-center justify-center pt-5">
          <p className="absolute top-0 left-0 font-bold p-4 text-center w-full">
            Say your tasks out loud
          </p>
          <div className="flex items-center justify-center gap-1 h-6 mt-5">
            {[32, 69, 81, 100, 45, 91, 58, 94, 81].map((level, index) => (
              <div
                key={index}
                className="w-2 bg-black rounded-full min-h-1"
                style={{ height: `${level}%` }}
              ></div>
            ))}
            <Button
              onClick={() => setIsListening(!isListening)}
              size="icon"
              className={`text-white font-bold ml-1 rounded-full`}
            >
              <span className="material-symbols-rounded">mic</span>
            </Button>
          </div>
        </div>
      )}

      {isListening && (
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
      )}
    </div>
  );
}

export default SpeechPreview;
