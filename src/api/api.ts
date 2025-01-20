import { ApiTransformer, IItemResponse } from "@/api/helpers/ApiTransformer";

const config = {
  baseUrl: "https://itunes.apple.com",
};

export class API {
  static async search(options = { search: "*" }) {
    let searchStr = options.search.replaceAll(" ", "+");

    if (searchStr.length < 1) {
      searchStr = "*";
    }

    const fetched = await fetch(
      `${config.baseUrl}/search?term=${searchStr}&limit=25`
    );

    const json = (await fetched.json()) as {
      resultCount: number;
      results: IItemResponse[];
    };

    return {
      count: json.resultCount,
      list: ApiTransformer.ItemsTransformer(json.results),
    };
  }
}
