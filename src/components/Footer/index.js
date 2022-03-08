import React from "react";

import "./style.css";

function Index(props) {
  return (
    <footer className="col-12 footer">
      <div className="justify-content-center">
        <div className="col-12 text-light">
          <ul className="list-inline d-flex footer-list link-list">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://jatengprov.go.id/"
                className="footer-link"
              >
                Dinas Provinsi Jawa Tengah
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="http://pdk.jatengprov.go.id/main"
                className="footer-link"
              >
                Dinas Pendidikan Provinsi Jawa Tengah
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 copyright mt-2">
          &copy; {props.copyright}{" "}
          <a target="_blank" rel="noreferrer" href="https://s.id/geschool">
            Geschool
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Index;
