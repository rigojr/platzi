class Http {
  static instance = new Http();

  get = async (url: string) => {
    try {
      let req = await fetch(url)
      let json = await req.json();
      return json;
    } catch (error) {
      console.log('Http get error,', error);
      throw Error(error)
    }
  }

  post = async (url: string, body: any) => {
    try {
      let req = await fetch(url, {
        method: "POST",
        body
      });
      let json = await req.json();
      return json;
    } catch (error) {
      console.log('Http get post,', error);
      throw Error(error)
    }
  }

}

export default Http;