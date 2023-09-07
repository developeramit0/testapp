import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Button, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import logo from '../logo.svg';
import { useState } from 'react';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';


const PdfViewer = () => {
  const [page, setPage] = useState(1);
  const header = new Headers();
  header.append('Access-Control-Allow-Origin', '*');
  const width = window.innerWidth - 600
  const navigate = useNavigate();
let abc
  const handleLogOut = async () => {
    await localStorage.clear();
    navigate("/");
  }
  const handleSubmit = (e) => {
    if (e) {
      setPage(Number(e))
    }
  }

  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.value;
    abc=name
  };
  return (
    <div>
      <div className="navBar">
        <img src={logo} className="" alt="logo" style={{ height: 70, width: 70, position: "absolute", left: 20 }} />
        <h5 className="log-out" onClick={() => handleLogOut()}>Logout</h5>
        <div style={{ height: 70, width: 110, position: "absolute", left: 200, marginTop: 20, flexDirection: "row", display: "flex" }} >
          <Input
            name="page"
            className="mb-4"
            type="number"
            placeholder="Enter page"
            onChange={handleChange}
            style={{ height: 40, alignSelf: "center" }}
          />
        </div>
        <h5 className="log-out " style={{ height: 40, position: "absolute", left: 330, textAlign: "center" }} onClick={() => handleSubmit(abc)}>submit</h5>
      </div>
      <div className="pdf_contanier">
        <div style={{ marginTop: "20%", width: 100 }}>
          <Button onClick={() => setPage(page - 1)}>previous</Button>
        </div>
        <div style={{ width: width, justifyContent: "center", alignItems: "center", display: "flex" }}>

          <Document
            file={{ url: 'https://researchtorevenue.files.wordpress.com/2015/04/1r41ai10801601_fong.pdf', header }}
            className='pdf_doc'
            onSourceError={(e)=>console.log('onSourceError',e)}
            onSourceSuccess={(e) => console.log("-onSourceSuccess--", e)}
            onEr
          >
            <Page pageNumber={page} />
          </Document>
        </div>

        <div style={{ marginTop: "20%", width: 100 }}>
          <Button onClick={() => setPage(page + 1)}>next</Button>
        </div>

      </div>
    </div>

  )
};

export default PdfViewer
