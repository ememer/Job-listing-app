import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import jobs from "../utils/data.json";
import "mapbox-gl/dist/mapbox-gl.css";
import { Map, Marker } from "react-map-gl";

import {
  faLocationPin,
  faStopwatch,
  faFlask,
  faBusinessTime,
  faArrowLeft,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";

import "./JobDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MAPBOX_TOKEN: string =
  "pk.eyJ1IjoiZW1lbWVyIiwiYSI6ImNsYWxlYXM5YzA0b3Azb3BldGxucjdzcHgifQ.A213Odf8YgfWddgNjfEdrw";

type JobDescription = {
  title: string;
  text: string;
  subtitle: string;
  subtext: string;
};

type AddressObject = {
  postcode: string;
  city: string;
  country: string;
  street: string;
  number: number;
};

interface JobList {
  company: string;
  contract: string;
  languages: string[];
  logo: string;
  level: string;
  location: string;
  position: string;
  postedAt: string;
  tools: string[];
  image: string;
  description: JobDescription;
  address?: AddressObject;
}

const JobDetails = () => {
  const [isClipboard, setIsClipboard] = useState(false);
  const [coordinatesArray, setCoordinatesArray] = useState([0, 0]);
  const { id } = useParams();

  let pageId: number;
  if (id) {
    pageId = +id;
  } else {
    pageId = 0;
  }
  const fakeApiResponse = jobs.filter((job) => job.id === pageId);
  const {
    company,
    contract,
    languages,
    logo,
    level,
    location,
    position,
    postedAt,
    tools,
    image,
    description,
    address,
  }: JobList = fakeApiResponse[0];

  const copyClipboard = (): void => {
    navigator.clipboard.writeText(window.location.href);
    setIsClipboard(!isClipboard);
  };

  useEffect((): void => {
    if (isClipboard) {
      setTimeout(() => {
        setIsClipboard(!isClipboard);
      }, 1500);
    }
  }, [isClipboard]);

  type ResponseApi = {
    features: [{ center: [number, number] }];
  };

  useEffect((): void => {
    let stringURL: string = `${address?.street} ${address?.number} ${address?.postcode} ${address?.city} ${address?.country}`;
    let encodeURL: string = encodeURIComponent(stringURL);

    const geoCodeAddress = async (apiURL: string) => {
      const endpoint: string = "mapbox.places";
      const mapBoxResponse: Response = await fetch(
        `https://api.mapbox.com/geocoding/v5/${endpoint}/${apiURL}.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${MAPBOX_TOKEN}&limit=1`
      );
      let response: ResponseApi = await mapBoxResponse.json();
      let coordinatesArray = response?.features[0].center;

      setCoordinatesArray(coordinatesArray);
    };
    if (encodeURL) {
      geoCodeAddress(encodeURL);
    }
  }, [
    address?.street,
    address?.number,
    address?.postcode,
    address?.city,
    address?.country,
  ]);

  return (
    <section className="details-section">
      {isClipboard && (
        <span className="clipboard-popup">
          Link został skopiowany do schowka
        </span>
      )}
      <div className="details-nav">
        <Link className="back-button" to={"/#"}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <button onClick={copyClipboard} className="share-button">
          <FontAwesomeIcon icon={faShareNodes} />
        </button>
      </div>
      <div
        className="details-header"
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div>
          <img alt={`${company} logo`} src={logo}></img>
        </div>
        <div>
          <h1>{company}</h1>
          <span>{position}</span>
        </div>
      </div>
      <ul className="details-job">
        <li title="Lokalizacja">
          <FontAwesomeIcon className="details-icons" icon={faLocationPin} />
          {location}
        </li>
        <li title="Typ kontraktu">
          <FontAwesomeIcon className="details-icons" icon={faStopwatch} />
          {contract}
        </li>
        <li title="Poziom zaawansowania">
          <FontAwesomeIcon className="details-icons" icon={faFlask} />
          {level}
        </li>
        <li title="Kiedy opublikowano">
          <FontAwesomeIcon className="details-icons" icon={faBusinessTime} />
          {postedAt}
        </li>
      </ul>
      <div>
        <h2 className="details-tech-title">Technologie</h2>
        {(languages || tools) && (
          <ul className="details-tech">
            {languages?.map((lang, idx) => (
              <li key={`${lang}${idx}`}>{lang}</li>
            ))}
            {tools?.map((tool, idx) => (
              <li key={`${tool}${idx}`}>{tool}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="details-content">
        <div>
          {image && (
            <div className="details-img">
              <div style={{ backgroundImage: `url("${image}")` }} />
            </div>
          )}
          <div>
            <h2>Opis</h2>
            <h2>{description.title}</h2>
            <p>{description.text}</p>
            <h2>{description.subtitle}</h2>
            <p>{description.subtext}</p>
          </div>
        </div>
        {coordinatesArray[0] !== 0 && coordinatesArray[1] !== 0 && (
          <span className="map-layer">
          <Map
            mapStyle="mapbox://styles/mapbox/streets-v9"
            style={{
              width: "100%",
              borderRadius: "10px",
            }}
            initialViewState={{
              longitude: coordinatesArray[0],
              latitude: coordinatesArray[1],
              zoom: 12,
            }}
            mapboxAccessToken={MAPBOX_TOKEN}
          >
            <Marker
              longitude={coordinatesArray[0]}
              latitude={coordinatesArray[1]}
              anchor="bottom"
            ></Marker>
          </Map>
            </span>
        )}
      </div>
    </section>
  );
};

export default JobDetails;
