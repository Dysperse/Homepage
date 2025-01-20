import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DemoButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          slot="a"
          // @ts-ignore
          target="_blank"
          className="text-lg sm:text-xl lg:text-2xl h-12 lg:h-16 rounded-full px-4 lg:px-12 border-black border-2"
          variant="outline"
        >
          Play the demo
          <span className="material-symbols-rounded">joystick</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[calc(90vw-2rem)]">
        <div
          style={{
            position: "relative",
            paddingBottom: "calc(52.14259992797984% + 41px)",
            height: 0,
            width: "100%",
          }}
        >
          <iframe
            src="https://demo.arcade.software/v1LRK1gDjQs8TB5DByn7?embed&embed_mobile=inline&embed_desktop=inline&show_copy_link=true"
            title="✌️ Dysperse demo!"
            frameBorder="0"
            loading="lazy"
            // @ts-ignore
            webkitAllowFullScreen
            mozAllowFullScreen
            allowFullScreen
            allow="clipboard-write"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              colorScheme: "light",
            }}
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
