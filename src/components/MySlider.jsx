import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import "./MySlider.css";
export default function MySlider() {
  return (
    <>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.istockphoto.com/photos/young-female-customer-shopping-in-clothing-store-retail-sales-helps-picture-id1345105817?b=1&k=20&m=1345105817&s=170667a&w=0&h=G7Fr8n_XWtvmNORe53b2LSx6yJ-7rrOVekFNMcA2IfY="
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.istockphoto.com/photos/look-at-this-gorgeous-dress-picture-id854321536?b=1&k=20&m=854321536&s=170667a&w=0&h=dzLz5bWXIWAr8hGuJhYN6yTilnfJhAo3O48mlLJ28tA="
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.istockphoto.com/photos/best-friends-make-the-best-shopping-mates-picture-id629508112?b=1&k=20&m=629508112&s=170667a&w=0&h=pfbOdPMu8UR6rBuEQjq-WI_gjorLdRu-FGDxMJ1FQdk="
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </>
);
}
  

