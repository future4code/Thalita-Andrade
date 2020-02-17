export class ApiRouter {
  public static async handleRoute(path: string, event: any): Promise<any> {
    // Para testar o helloWorld, bata no endpoint: url/helloWorld
    switch (path) {
      case "helloWorld":
        return {
          message: "Hello World"
        };
      default:
        throw new Error("Rota não existe");
    }
  }
}
