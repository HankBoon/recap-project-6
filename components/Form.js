import styled from "styled-components";
import { StyledButton } from "./StyledButton";

export const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 1px solid black;
  border-radius: 0.5rem;
`;

export const Textarea = styled.textarea`
  font-family: inherit;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export default function Form({ onSubmit, formName, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        name="name"
        type="text"
        defaultValue={defaultData?.name}
      />
      <Label htmlFor="image-url">Image Url</Label>
      <Input
        id="image-url"
        name="image"
        type="text"
        defaultValue={
          defaultData?.image ||
          "https://images.unsplash.com/photo-1599827552599-eadf5fb3c75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlZXBlcmJhaG4lMjBoYW1idXJnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
        }
      />
      <Label htmlFor="location">Location</Label>
      <Input
        id="location"
        name="location"
        type="text"
        defaultValue={
          defaultData?.location ||
          "https://www.google.com/maps/place/Reeperbahn,+Hamburg/@53.5491522,9.9606555,15.91z/data=!4m5!3m4!1s0x47b18f720653ed5f:0xe81438a344df5125!8m2!3d53.5495695!4d9.9626148"
        }
      />
      <Label htmlFor="map-url">Map Url</Label>
      <Input
        id="map-url"
        name="mapURL"
        type="text"
        defaultValue={defaultData?.mapURL}
      />
      <Label htmlFor="description">Description</Label>
      <Textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        defaultValue={defaultData?.description}
      ></Textarea>
      <StyledButton type="submit">
        {defaultData ? "Update place" : "Add place"}
      </StyledButton>
    </FormContainer>
  );
}
