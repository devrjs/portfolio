export function Spinner() {
  return (
    <div className="flex flex-row gap-2">
      <div className="h-2 w-2 animate-bounce rounded-full bg-primary-foreground"></div>
      <div className="h-2 w-2 animate-bounce rounded-full bg-primary-foreground [animation-delay:-.3s]"></div>
      <div className="h-2 w-2 animate-bounce rounded-full bg-primary-foreground [animation-delay:-.5s]"></div>
    </div>
  )
}
