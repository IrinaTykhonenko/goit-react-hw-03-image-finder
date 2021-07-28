import { Component } from "react";
import { fetchImages } from "./services/pixabay.api";

import Container from "./components/Container";
import Button from "./components/Button";
import ImageGallery from "./components/ImageGallery";
// import ImageGalleryItem from "./components/ImageGalleryItem";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import Searchbar from "./components/Searchbar";

class App extends Component {
  state = {
    images: [],
    searchName: null,
    page: 1,
    largeImage: "",
    reqStatus: "idle",
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.searchName !== this.state.searchName) {
      const images = await fetchImages(this.state.searchName);
      this.setState({ images });
      // this.loadMoreFn();
    }
  }

  handleFormSubmit = (searchName) => {
    this.setState({ searchName });
  };

  onImageClick = (largeImageURL) => {
    this.setState({ largeImage: largeImageURL });
  };

  // loadMoreFn = () => {
  //   const { searchName, page } = this.state;
  //   const options = { searchName, page };

  //   this.setState({ isLoading: true });

  //   fetchImages(options)
  //     .then(({ data }) => {
  //       console.log(data);

  //       this.setState((prevState) => ({
  //         images: [...prevState.images, ...data.hits],
  //         page: prevState.page + 1,
  //       }));
  //     })
  //     .catch((error) => this.setState({ error }))
  //     .finally(() => {
  //       this.setState({ isLoading: false });
  //       window.scrollTo({
  //         top: document.documentElement.scrollHeight,
  //         behavior: "smooth",
  //       });
  //     });
  // };

  render() {
    return (
      <Container>
        <Searchbar onSearch={this.handleFormSubmit} />

        <ImageGallery
          showImages={this.state.images}
          onImageClick={this.onImageClick}
        />
        <Button />
      </Container>
    );
  }
}

export default App;
