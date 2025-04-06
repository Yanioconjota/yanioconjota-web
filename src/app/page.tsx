import MarkdownViewer from './components/MarkdownViewer'
import ThemeToggle from './components/ThemeToggle'
export default function Home() {
  return (
    <main className='flex flex-col'>
      <ThemeToggle />
      <MarkdownViewer />
    </main>
  )
}
