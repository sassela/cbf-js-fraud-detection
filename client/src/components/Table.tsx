interface TableProps {
  head: any,
  body: any;
}

const Table = ({ head, body }: TableProps) => {
  return (
    <div className="row">
      <div className='column'>
        <table className="table table-striped table-hover table-dark table-borderless align-middle">
          <thead>
            {head}
          </thead>
          <tbody>
            {body}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Table;
