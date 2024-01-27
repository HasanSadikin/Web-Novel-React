const FooterSection = () => {
  return (
    <>
      <div className="w-full bg-base-200 h-fit poppins">
        <div className="grid grid-cols-5 mx-auto w-3/4 py-20">
          <div className="text-5xl font-bold">Logo</div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-semibold">Novels</h1>
            <ul>
              <li>Search</li>
              <li>Bookmark</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-semibold">Account</h1>
            <ul>
              <li>Account</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <ul>
              <li>Create Novel</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-semibold">Socials</h1>
          </div>
        </div>
      </div>
      <h1 className="text-sm font-light text-center bg-base-200 py-5">
        Created by Hasan Sadikin
      </h1>
    </>
  );
};

export default FooterSection;
