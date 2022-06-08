

export const reqfetch = async (request) => {
   try {
      const response = await fetch(request);
      const data = await response.json();

      return { data };
   } catch (error) {
      console.log('fetch error', error)
      return { error }
   }
}
