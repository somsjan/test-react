export class BaseService {

  // const baseOptions = {
  //   ding: 'dong',
  // };

  async post(url: string, body?: any, options?: any) {
    const request = await fetch(url, {
      method: 'POST',
      ...options,
      body: body ? JSON.stringify(body) : null
    });

    return await request.json();
  }

}
