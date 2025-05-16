import client from "./client";

export default class githubController {
  public static async searchRepositories(query: string, page: number) {
    let endpoint = `/search/repositories?q=${query}&per_page=20&page=${page}`;
    return client.get(endpoint).then((response) => response.data);
  }
  public static async getRepositoryData(fullName: string) {
    let endpoint = `/repos/${fullName}`;
    return client.get(endpoint).then((response) => response.data);
  }
  public static async getRepositoryContent(fullName: string, path?: string) {
    let endpoint = `/repos/${fullName}/contents${path ? `/${path}` : ""}`;
    return client.get(endpoint).then((response) => response.data);
  }
}
