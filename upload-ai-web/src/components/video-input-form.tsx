import { FileVideo, Upload } from "lucide-react";
import { Label } from "./ui/label"
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { ChangeEvent, FormEvent, useMemo, useRef, useState } from "react";


export function VideoInputForm() {
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const promptInputRef = useRef<HTMLTextAreaElement>(null)

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.currentTarget

    if (!files) {
      return
    }
    const selectedFile = files[0]

    setVideoFile(selectedFile)

  }

  function handleUploadVideo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const prompt = promptInputRef.current?.value

    if (!videoFile) {
      return
    }
    //converter video em audio 

  }

  const previwURL = useMemo(() => {
    if (!videoFile) {
      return null
    }
    return URL.createObjectURL(videoFile)

  }, [videoFile])


  return (
    <form onSubmit={handleUploadVideo} className="space-y-6">
      <label
        className="relative border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
        htmlFor="video">
        {previwURL ? (
          <video src={previwURL} controls={false} className="pointer-events-none absolute inset-0" />
        ) : (
          <>
            <FileVideo className="w-4 h-4" />
            Selecione um video
          </>
        )}
      </label>
      <input type="file" id="video" accept="video/mp4" className="sr-only" onChange={handleFileSelected} />
      <Separator />
      <div className="space-y-2">
        <Label htmlFor="transcription_prompt"> Prompt de transcrição</Label>
        <Textarea ref={promptInputRef} id="transcription_prompt" className="h-20 leading-relaxed resize-none" placeholder="Inclua palavras-chave mencionadas no video separadas por virgula (,)" />
      </div>

      <Button type="submit" className="w-full">
        Carregar video
        <Upload className="h-4 w-4 ml-2" />
      </Button>
    </form>
  )
}