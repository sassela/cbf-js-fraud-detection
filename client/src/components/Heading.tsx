interface HeadingProps {
  headingText: string
}

const Heading = ({ headingText }: HeadingProps) => {
  return (
    <div className="col-9">
      <h2>{headingText}</h2>
    </div>
  )
}

export default Heading;
