import getUrl from "./utils";
import { ADDRESS, REGION, PATH, PORT } from "./constant";

const url = getUrl(ADDRESS, PORT, PATH);
export { REGION as region, url };
