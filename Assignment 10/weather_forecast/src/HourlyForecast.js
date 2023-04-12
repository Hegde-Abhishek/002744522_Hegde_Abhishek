import React from "react";
import moment from "moment";

function HourlyForecast(props) {
  const _date = new Date(props.data.dt * 1000);
  const _img = `owf owf-${props.data.weather[0].id} owf-5x`;
  const fahrenheitMax = Math.round(props.data.main.temp_max);
  const fahrenheitMin = Math.round(props.data.main.temp_min);
  const farenheitTemp = Math.round(props.data.main.temp);

  return (
    <div className="row">
      <div className="col-12">
        <div className="card py-2 my-3 shadow d-flex flex-column-wrap justify-content-center">
          <div className="card-body text-center">
            <h4 className="text-muted">
              {moment(_date).format("MMMM D YYYY")}
            </h4>
            <h5>
              {props.data.day} at {moment(_date).format("HH:mm a")}
            </h5>
            <i className={_img}></i>
            <p>{props.data.weather[0].description}</p>
            <h5>Temperature: {farenheitTemp}°F</h5>
            <p>
              Minimum: {fahrenheitMin}°F and Maximum: {fahrenheitMax}°F
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HourlyForecast;
