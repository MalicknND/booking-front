const Contact = () => {
  return (
    <div className="font-sans text-base text-gray-900 sm:px-10 overflow-y-scroll h-full">
      <div className="text-base text-gray-900">
        <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="mx-2 pt-12 text-center md:mx-auto md:w-2/3 md:pb-12">
            <h1 className="mb-4 text-3xl font-black sm:text-5xl xl:text-6xl">
              Contactez nous
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-20 flex w-full max-w-screen-lg flex-col overflow-hidden rounded-xl text-gray-900 md:flex-row md:border md:shadow-lg">
        <form className="mx-auto w-full max-w-xl border-gray-200 px-10 py-8 md:px-8">
          <div className="mb-4">
            <label className="text mb-2 block font-medium" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              id="email"
              type="email"
              required=""
            />
          </div>

          <div className="mb-4">
            <label className="text mb-2 block font-medium" htmlFor="subject">
              Objet:
            </label>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              id="subject"
              type="subject"
              required=""
            />
          </div>
          <div className="mb-4">
            <label className="text mb-2 block font-medium" htmlFor="message">
              Message:
            </label>
            <textarea
              className="h-52 w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              id="message"
              required=""
            ></textarea>
          </div>
          <div className="flex items-center">
            <div className="flex-1"></div>
            <button
              className="rounded-xl bg-[#fece51] px-4 py-3 text-center font-bold text-black hover:bg-[#e0c275]"
              type="submit"
            >
              Envoyer
            </button>
          </div>
        </form>
        <div className="mt-10 bg-[#fece51]  px-10 py-8 text-black md:mt-0 md:ml-auto">
          <div className="">
            <p className="mb-4 font-medium border-b border-black pb-2">
              HORAIRE
            </p>
            <p className="mb-4">Lundi – Jeudi: 08:00 – 16:00</p>
            <p className="mb-4">Vendredi: 08:00 - 15:00</p>
            <p className="mb-4">Weekend: Fermé</p>
            <p className="mb-4">
              Email:
              <a href="#" className="font-semibold underline">
                contact@booking.com
              </a>
            </p>
            <p className="mb-4">
              Téléphone :
              <a href="#" className="font-semibold underline">
                +33 6 12 34 56 78
              </a>
            </p>
            <hr className="my-2 h-0 border-t border-r-0 border-b-0 border-l-0 border-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
