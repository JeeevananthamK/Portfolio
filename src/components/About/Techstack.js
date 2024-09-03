import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack() {
  return (
    <div className="skillset-table">
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SIEM & EDR</td>
            <td>Azure Sentinel, Splunk, Elasticsearch, Cyberreason, Symantec, Wazuh</td>
          </tr>
          <tr>
            <td>Live Forensics</td>
            <td>Win-event logs, Hayabusa, Kuiper, Cylr, Chainsaw, Deepbluecli</td>
          </tr>
          <tr>
            <td>Disk, RAM acquisition and Analysis</td>
            <td>FTK Imager, Magnet RAM Capture, Belkasoft X, Autopsy, Volatility</td>
          </tr>
          <tr>
            <td>File Carving</td>
            <td>Photorec, HxD64, foremost, Magnet Axiom, Scalpel, Recoverjpeg, Bulk Extractor, AccessData, FTK Imager, QphotoRec</td>
          </tr>
          <tr>
            <td>Email Forensics</td>
            <td>Oletools, Exiftool, Email Header Analysis (EHA), Strings</td>
          </tr>
          <tr>
            <td>USB & Registry Forensics</td>
            <td>Regshot, Registry Explorer, USBDViewer, Amcache, KAPE, Autopsy</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Techstack;
