import { ImageList, ImageListItem } from "@mui/material";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addImages, deleteImage } from "../../redux/features/gallery";

const Gallerymodal = ({ showGallery, setShowGallery }) => {
  const [photo, setPhoto] = useState("");
  const images = useSelector((state) => state.gallery.items);
  const dispatch = useDispatch();

  const addPhoto = () => {
    dispatch(addImages(photo));
  };

  const deletePhoto = (id) => {
    dispatch(deleteImage(id));
  };

  return (
    <>
      <Modal
        showGallery={showGallery}
        onHide={() => setShowGallery(false)}
        dialogClassName="modal-w100"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Галерея
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ImageList
            sx={{ width: "100%", height: "100%" }}
            cols={3}
            ForwardRef={"100%"}
            // rowHeight={"100%"} тут я заменил на ForwardRef={"100%"} из-за ошибки в консоли

          >
            {images.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={`http://localhost:4000/${item.image}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`http://localhost:4000/${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <Button onClick={() => deletePhoto(item._id)} variant="danger">
                  X
                </Button>
              </ImageListItem>
            ))}
          </ImageList>
          <input
            onChange={(e) => setPhoto(e.target.files[0])}
            className="form-control"
            type="file"
            id="formFile"
            style={{
              margin: "auto",
            }}
          />
          <Button onClick={addPhoto}>Сохранить</Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Gallerymodal;
