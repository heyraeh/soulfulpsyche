// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
import clipboardStyle from "./styles/clipboard.scss"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import RecentNotesConstructor from "./RecentNotes"

export default (() => {
  const RecentNotes = RecentNotesConstructor()

  function Body(componentData: QuartzComponentProps) {
    return (
      <div id="quartz-body">
        {componentData.children}
        <RecentNotes {...componentData} />
      </div>
    )
  }

  Body.afterDOMLoaded = clipboardScript
  Body.css = clipboardStyle

  return Body
}) satisfies QuartzComponentConstructor