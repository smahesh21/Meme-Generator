import {Component} from 'react'
import {
  MainMemeGeneratorContainer,
  MemeGeneratorContainer,
  Heading,
  FormAndMemeHeading,
  FormElement,
  InputElement,
  LabelElement,
  SelectElement,
  OptionElement,
  SubmitButton,
  MemeContainer,
  TextElement,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: fontSizesOptionsList[0].optionId,
    backGroundImage: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  }

  onChangeImageUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  onSubmitButton = event => {
    event.preventDefault()

    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state

    this.setState({
      backGroundImage: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSize: fontSizeInput,
    })
  }

  renderImageUrlElement = () => {
    const {imageUrlInput} = this.state

    return (
      <>
        <LabelElement htmlFor="imageUrl">Image URL</LabelElement>
        <InputElement
          type="text"
          id="imageUrl"
          value={imageUrlInput}
          onChange={this.onChangeImageUrl}
          placeholder="Enter the Image Url"
        />
      </>
    )
  }

  renderTopTextElement = () => {
    const {topTextInput} = this.state

    return (
      <>
        <LabelElement htmlFor="topText">Top Text</LabelElement>
        <InputElement
          type="text"
          id="topText"
          value={topTextInput}
          onChange={this.onChangeTopText}
          placeholder="Enter the Top Text"
        />
      </>
    )
  }

  renderBottomTextElement = () => {
    const {bottomTextInput} = this.state

    return (
      <>
        <LabelElement htmlFor="bottomText">Bottom Text</LabelElement>
        <InputElement
          type="text"
          id="bottomText"
          value={bottomTextInput}
          onChange={this.onChangeBottomText}
          placeholder="Enter the Bottom Text"
        />
      </>
    )
  }

  renderFontSizeElement = () => {
    const {fontSizeInput} = this.state

    return (
      <>
        <LabelElement htmlFor="select">Font Size</LabelElement>
        <SelectElement
          id="select"
          value={fontSizeInput}
          onChange={this.onChangeFontSize}
        >
          {fontSizesOptionsList.map(eachOption => (
            <OptionElement
              value={eachOption.optionId}
              key={eachOption.optionId}
            >
              {eachOption.displayText}
            </OptionElement>
          ))}
        </SelectElement>
      </>
    )
  }

  renderMeme = () => {
    const {backGroundImage, topText, bottomText, fontSize} = this.state

    return (
      <MemeContainer data-testid="meme" backgroundImage={backGroundImage}>
        <TextElement activeFontSize={fontSize}>{topText}</TextElement>
        <TextElement activeFontSize={fontSize}>{bottomText}</TextElement>
      </MemeContainer>
    )
  }

  render() {
    return (
      <MainMemeGeneratorContainer>
        <MemeGeneratorContainer>
          <FormAndMemeHeading>
            <Heading>Meme Generator</Heading>
            <FormElement onSubmit={this.onSubmitButton}>
              {this.renderImageUrlElement()}
              {this.renderTopTextElement()}
              {this.renderBottomTextElement()}
              {this.renderFontSizeElement()}
              <SubmitButton type="submit">Generate</SubmitButton>
            </FormElement>
          </FormAndMemeHeading>
          {this.renderMeme()}
        </MemeGeneratorContainer>
      </MainMemeGeneratorContainer>
    )
  }
}

export default MemeGenerator
