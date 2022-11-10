export function Footer() {
  return (
    <>
      <div
        style={{ backgroundColor: "#10140c" }}
        className="d-flex p-4 justify-content-around"
      >
        <div>
          <p className="fw-bold text-light">Let's do it together</p>
          <p className="text-white-50">Careers</p>
          <p className="text-white-50">Soko yetu Partners</p>
          <p className="text-white-50">Soko yet business</p>
          <p className="text-white-50">More</p>
        </div>

        <div>
          <p className="fw-bold text-light">Link our interest</p>
          <p className="text-white-50">About us</p>
          <p className="text-white-50">FAQ</p>
          <p className="text-white-50">Products</p>
          <p className="text-white-50">Contact us</p>
        </div>

        <div>
          <p className="fw-bold text-light">Follow us</p>
          <p className="text-white-50">Instagram</p>
          <p className="text-white-50">Twitter</p>
          <p className="text-white-50">Facebook</p>
          <p className="text-white-50">Linked</p>
        </div>

        <div className="mt-5">
          <p className="text-white-50">TERMS AND CONDITIONS</p>
          <p className="text-white-50">PRIVACY POLICY</p>
          <p className="text-white-50">COOKIES SETTINGS</p>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center text-white bg-dark"
        style={{ height: "3rem", fontSize: ".9rem", fontWeight: "300" }}
      >
        <div>All rights reserved 2022</div>
      </div>
    </>
  );
}
