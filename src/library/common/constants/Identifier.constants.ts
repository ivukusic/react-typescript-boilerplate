export default {
  token: 'APP_TOKEN',
  language: 'APP_LANGUAGE',
  user: 'APP_USER',
};

export const regex = {
  email: new RegExp(
    '^(([^<>()\\[\\]\\\\.,;:\\s@]+(\\.[^<>()\\[\\]\\\\.,;:\\s@]+)*)|(.+))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
  ),
  url: new RegExp('^http(s?):\\/\\/\\S+(\\/\\S+)*(\\/)?$'),
  price: new RegExp(/^\d+(\.\d{1,2})?$/),
  number: new RegExp('^[0-9]+$'),
};
