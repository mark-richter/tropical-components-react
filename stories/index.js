import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withReadme, withDocs } from "storybook-readme";
import {
    withKnobs,
    text,
    boolean,
    number,
    object
} from "@storybook/addon-knobs";

import Card from "../src/Card/Card.jsx";
import CardReadme from "../src/Card/Docs/Card.md";
import CardImage from "../src/Card/CardImage.jsx";
import CardImageReadme from "../src/Card/Docs/CardImage.md";
import CardImageAndBadgeReadme from "../src/Card/Docs/CardImageAndBadge.md";

import NavBar from "../src/Navigation/NavBar.jsx";

// Home
import WelcomeStory from "../src/Home/Stories/WelcomeStory.jsx";

// Typography
import InfoStory from "../src/Typography/Stories/InfoStory.jsx";
import StylesStory from "../src/Typography/Stories/StylesStory.jsx";

// Navigation
import ButtonStory from "../src/Button/Stories/ButtonStory.jsx";

// Forms
import TextInputStory from "../src/Forms/Stories/TextInputStory.jsx";
import TextAreaStory from "../src/Forms/Stories/TextAreaStory.jsx";
import SelectStory from "../src/Forms/Stories/SelectStory.jsx";
import RadioStory from "../src/Forms/Stories/RadioStory.jsx";
import CreatableSingleSelectStory from "../src/Forms/Stories/CreatableSingleSelectStory.jsx";
import SingleSelectStory from "../src/Forms/Stories/SingleSelectStory.jsx";
import DynamicFormStory from "../src/Forms/Stories/DynamicFormStory.jsx";

// Cards

storiesOf("Card", module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme(CardReadme))
    .add("basic", () => (
        <Card>
            <h4>Hello, World!</h4>
        </Card>
    ))
    .addDecorator(withReadme(CardImageReadme))
    .add("image", () => (
        <div className="col-md-6">
            <Card
                image={
                    <CardImage
                        posterImage={text(
                            "posterImage",
                            "https://static.ssbintel.com/assets/portals/ssb/background/football_background.jpg"
                        )}
                        title={text("title", "Hello, World!")}
                        size={text("size", "medium")}
                    />
                }
            >
                <div>
                    <p>This is a card with an image</p>
                </div>
            </Card>
        </div>
    ))
    .addDecorator(withReadme(CardImageAndBadgeReadme))
    .add("image & badge", () => (
        <div className="col-md-6">
            <Card
                image={
                    <CardImage
                        posterImage={text(
                            "posterImage",
                            "https://static.ssbintel.com/assets/portals/ssb/background/football_background.jpg"
                        )}
                        image={text(
                            "image",
                            "https://static.ssbintel.com/assets/portals/ssb/logo/ssb-logo.png"
                        )}
                        title={text("title", "Hello, World!")}
                        size={text("size", "medium")}
                    />
                }
            >
                <div>
                    <p>This is a card with an image &amp; badge</p>
                </div>
            </Card>
        </div>
    ))
    .add("badge only", () => (
        <div className="col-md-6">
            <Card
                image={
                    <CardImage
                        image="https://static.ssbintel.com/assets/portals/ssb/logo/ssb-logo.png"
                        size="small"
                    />
                }
            >
                <div>
                    <p>This is a card with a badge image only</p>
                </div>
            </Card>
        </div>
    ))
    .add("image sizes", () => (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <p>Small</p>
                    <Card
                        image={
                            <CardImage
                                posterImage="https://static.ssbintel.com/assets/portals/ssb/background/football_background.jpg"
                                title="Hello, World!"
                                size="small"
                            />
                        }
                    >
                        <div>
                            <p>This is a card with an image</p>
                        </div>
                    </Card>
                </div>
                <div className="col-md-4">
                    <p>Medium</p>
                    <Card
                        image={
                            <CardImage
                                posterImage="https://static.ssbintel.com/assets/portals/ssb/background/football_background.jpg"
                                title="Hello, World!"
                                size="medium"
                            />
                        }
                    >
                        <div>
                            <p>This is a card with an image</p>
                        </div>
                    </Card>
                </div>
                <div className="col-md-4">
                    <p>Large</p>
                    <Card
                        image={
                            <CardImage
                                posterImage="https://static.ssbintel.com/assets/portals/ssb/background/football_background.jpg"
                                title="Hello, World!"
                                size="large"
                            />
                        }
                    >
                        <div>
                            <p>This is a card with an image</p>
                        </div>
                    </Card>
                </div>
            </div>
            <h2>With Badges</h2>
            <hr />
            <div className="row">
                <div className="col-md-4">
                    <p>Small</p>
                    <Card
                        image={
                            <CardImage
                                posterImage="https://static.ssbintel.com/assets/portals/ssb/background/football_background.jpg"
                                image="https://static.ssbintel.com/assets/portals/ssb/logo/ssb-logo.png"
                                title="Hello, World!"
                                size="small"
                            />
                        }
                    >
                        <div>
                            <p>This is a card with an image</p>
                        </div>
                    </Card>
                </div>
                <div className="col-md-4">
                    <p>Medium</p>
                    <Card
                        image={
                            <CardImage
                                posterImage="https://static.ssbintel.com/assets/portals/ssb/background/football_background.jpg"
                                image="https://static.ssbintel.com/assets/portals/ssb/logo/ssb-logo.png"
                                title="Hello, World!"
                                size="medium"
                            />
                        }
                    >
                        <div>
                            <p>This is a card with an image</p>
                        </div>
                    </Card>
                </div>
                <div className="col-md-4">
                    <p>Large</p>
                    <Card
                        image={
                            <CardImage
                                posterImage="https://static.ssbintel.com/assets/portals/ssb/background/football_background.jpg"
                                image="https://static.ssbintel.com/assets/portals/ssb/logo/ssb-logo.png"
                                title="Hello, World!"
                                size="large"
                            />
                        }
                    >
                        <div>
                            <p>This is a card with an image</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    ));

storiesOf("Navigation", module).add("navbar", () => <NavBar />);
