import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'Fine-tuning or RAG?',
    message: 'Fine-tuning or RAG?'
  },
  {
    heading: 'What are the latest advancements in quantization?',
    message: 'What are the latest advancements in quantization?'
  },
  {
    heading: 'When is the NVIDIA B100 coming out?',
    message: 'When is the NVIDIA B100 coming out?'
  },
  {
    heading: 'Compare ChatGPT to Gemimi',
    message: 'Compare ChatGPT to Gemimi'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
