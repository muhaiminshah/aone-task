import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons/faUserSecret";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons/faUserFriends";

export function initFontawesome() {
  library.add(faUserSecret, faInfoCircle, faHome, faUserFriends);
}
