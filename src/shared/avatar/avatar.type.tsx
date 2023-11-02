type TAvatar = {
  hair?:
    | "none"
    | "long"
    | "bun"
    | "short"
    | "pixie"
    | "balding"
    | "buzz"
    | "afro"
    | "bob"
    | undefined;
  hairColor?:
    | "black"
    | "blonde"
    | "orange"
    | "white"
    | "brown"
    | "blue"
    | "pink"
    | undefined;
  eyes?:
    | "content"
    | "normal"
    | "leftTwitch"
    | "happy"
    | "squint"
    | "simple"
    | "dizzy"
    | "wink"
    | "heart"
    | undefined;
  mouth?:
    | "lips"
    | "grin"
    | "sad"
    | "openSmile"
    | "open"
    | "serious"
    | "tongue"
    | undefined;
};

export default TAvatar;
