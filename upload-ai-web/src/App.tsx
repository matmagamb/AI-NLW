import { Github, Wand2 } from "lucide-react";
import { Button } from "./components/ui/button"
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";
import { VideoInputForm } from "./components/video-input-form";
import { PromptSelect } from "./components/prompt-select";

export function App() {
  function handlePromptSelected(template: string) {
    console.log(template)

  }


  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Upload AI</h1>
        <div className="flex items-center gap-3 ">
          <span className="text-sm text-muted-foreground">Desenvolvido com 💜 no NLW da rocketseat</span>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="outline">
            <Github className="h-4 w-4 mr-2" />
            GITHUB
          </Button>
        </div>
      </div>
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="inclua o prompt para IA" />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultado gerado pela IA" readOnly />
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: voce pode usar a variavel <code className="text-violet-400">{"{transcription}"}</code> para selecionar a transcrição do video selecionado
          </p>
        </div>
        <aside className="w-80  space-y-6">
          <VideoInputForm />
          <Separator />
          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>

              <PromptSelect onPromptSelected={handlePromptSelected} />
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Modelo</Label>

              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16K </SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Você poderá customizar essa opção em breve
              </span>
            </div>

            <Separator />
            <div className="space-y-4">
              <Label>Temperatura</Label>
              <Slider
                min={0}
                max={1}
                step={0.1}
              />

              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Valores mais altos tendem a deixar o resultado mais criativo e com possiveis erros
              </span>
            </div>
            <Separator />

            <Button type="submit" className="w-full">
              executar
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>

          </form>
        </aside>
      </main>
    </div>
  )
}

export default App
