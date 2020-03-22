export const type = code => {
  switch (code) {
    case "type1": // $14,900
      return {
        link:
          "https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=151726621-c9d380b1-50c7-4216-bb66-cb6d11dd71e4",
        qr:
          "https://res.cloudinary.com/sebashr20/image/upload/v1584841521/seed/qr_type1.jpg"
      };
    case "type2": // $24,900
      return {
        link:
          "https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=151726621-b102b9e2-33c1-4cc3-ad73-73ec8fc7265a",
        qr:
          "https://res.cloudinary.com/sebashr20/image/upload/v1584841658/seed/qr_type2.jpg"
      };
    default:
      return {
        link: null,
        qr: null
      };
  }
};
