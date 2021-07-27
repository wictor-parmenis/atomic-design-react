import Outdoor from "../components/atoms/Outdoor"
import InputLabel from "../components/molecules/inputLabel"
import ShowWords from "../components/organisms/ShowWords"
import TemplateMain from "../components/templates/templateMain"

export default function Home() {
  return (<>
      <TemplateMain>
        <div>
          <ShowWords />
        </div>
        <div></div>
        <div></div>
      </TemplateMain>
  </>)
}
