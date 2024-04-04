import React from "react";
import Container from "./Container";
import ProgressBar from "./ProgressBar";
import { FaRegCirclePlay } from "react-icons/fa6";
import { BsSkipForwardCircle } from "react-icons/bs";
import { BsSkipBackwardCircle } from "react-icons/bs";

export default function PlayToolbar() {
  return (
    <div>
      <Container className="w-full h-16 flex justify-center items-center">
        <BsSkipBackwardCircle className="w-7 h-7 mr-2" />
        <FaRegCirclePlay className="w-7 h-7 mx-1" />
        <BsSkipForwardCircle className="w-7 h-7 ml-2" />
        <ProgressBar className="w-24 ml-5" />
        <p className="ml-2">0:00</p>
        <span className="mx-2">/</span>
        <p>0:00</p>
      </Container>
    </div>
  );
}
