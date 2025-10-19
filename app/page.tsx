import { OpenInV0Button } from "@/components/open-in-v0-button";
import { Button } from "@/registry/ui/components/button/button";
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A simple button component
            </h2>
            <OpenInV0Button name="button" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative flex gap-2">
            <Button>Button</Button>
            <Button variant="brand">Button</Button>
            <Button variant="destructive">Button</Button>
            <Button variant="outline">Button</Button>
            <Button variant="ghost">Button</Button>
            <Button variant="secondary">Button</Button>
            <Button variant="link">Button</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
