import styled from "styled-components";
import image from "../assets/boys.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyle } from "./ReusableStyles";

const Profile = () => {
  return (
    <Section>
      <div className="image">
        <img src={image} alt="image" />
      </div>
      <div className="title">
        <h2>Muhammadiso Azamov</h2>
        <h5>
          <HiOutlineLocationMarker /> Qoqand, UZB
        </h5>
      </div>
      <div className="info">
        <div className="container">
          <h5>Days at work</h5>
          <h3>28</h3>
        </div>
        <div className="container">
          <h5>Rides</h5>
          <h3>427</h3>
        </div>
        <div className="container">
          <h5>Hourse</h5>
          <h3>76</h3>
        </div>
      </div>
    </Section>
  );
};

export default Profile;

const Section = styled.section`
  ${cardStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      height: 10rem;
      widht: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h2,
    h5 {
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
    h5{
      letter-spacing: 0.2rem;
    }
  }
  .info{
    display: flex;
    gap: 1rem;
    .container{
      text-align: center;
    }
  }
`;
