class AppService {
  getHello(): string {
    return 'Hello world';
  }
}

class AppController {
  constructor(private readonly appService: AppService) {}

  getHello(): string {
    return this.appService.getHello();
  }
}


const appService = new AppService();

const appController = new AppController(appService)

appController.getHello();
