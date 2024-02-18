function humidity ({stats}){

    return(
<div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Humidity info</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">{stats.humidity}%</h1>
            <ul className="list-unstyled mt-3 mb-4">
                <li>Cloud Pct is {stats.cloudPct} </li>
            </ul>
          </div>
        </div>
      </div>
    )
}
export default humidity;