import Heading from "./Heading";

interface HeaderRowProps {
  headingText: string,
  // TODO: fix type
  ctaOnClick: any,
  ctaText: string
}

const HeaderRow = ({ headingText, ctaText, ctaOnClick }: HeaderRowProps) => {
  return (
    <div className="row mb-3">
      <Heading headingText={headingText} />
      <div className="col">
        <div className="d-grid gap-2">
          <button className="btn btn-lg btn-success" onClick={ctaOnClick}>
            {ctaText}
          </button>
        </div>
      </div>
    </div>

  )
}

export default HeaderRow;
