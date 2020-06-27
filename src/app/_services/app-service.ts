export class AppService {

  getEndpoint(resourceName: string): string {
    return '/v1' + resourceName;
  }

}
