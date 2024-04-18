import { defineConfig } from '@tok/generation';


export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/money-falling.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Join ATM-Income and Start Earning Serious Cash!',
          description:
            "How would you like to start earning income with our Amazing ATM-Income System? Its a really simple system. I'll show you how you can easily start receiving payments today! Just click the next button below to learn more!",
          button: 'Give it a Try!',
        },
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/money-falling.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'How Does This Work? You asked? Well Let me Explain.',
          description:
            "Once you have joined our ATM-Income System, we will send you 100,000 ATM Tokens into your Phantom Wallet. ATM-Income tokens will support Solana blockchain after initial launch of our token. All you need to do is pay a one time small fee of $19.99 for your Lifetime Membership. This will cover your lifetime membership and will help us cover the smart contract audit and token IPO launch application fee. I know, I know... It might sound like a really steep price to pay, but just remember you will have 100,000 ATM Tokens in your wallet at launch. Just imagine the price of the token once we launch, our token will have the capacity to reach anywhere between $1 and $5 with that being said, you could possibly have over $100,000.00 in pure profits! DO NOT let this opportunity pass you by.",
          button: 'Join Now!',
        },
        // form
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_spy.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Forms',
          description: 'Lets get a little more information from you so that we can provide you with all the information you need to get started.',
          form: [
            {
              id: 'text_from_form',
              placeholder: 'First name',
              type: 'text',
            },
            {
              id: 'text_from_form',
              placeholder: 'Last name',
              type: 'text',
            },
            {
              id: 'text_from_form',
              placeholder: 'Email address',
              type: 'text',
            },
            {
              id: 'checkbox_from_form',
              placeholder: 'I agree to the terms and conditions provided',
              type: 'checkbox',
            },
          ],
          button: 'Next',
        },
        // image
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/daily-reward.tgs'),
            size: 250,
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Our Amazing ATM-Income ',
          description:
            "Here you can see <b>Image</b>. But it's just the beginning...",
          button: {
            content: 'Go to paywall',
            to: '/paywall',
          }
        },
      ],
    },

    // paywall
    {
      extends: 'paywall',
      path: '/paywall',
      media: {
        type: 'sticker',
        src: import('./assets/stickers/duck_money.tgs'),
        size: 150,
      },
      shape: 'square',
      title: 'Your beautiful Paywall',
      list: [
        'Adjustable product cards',
        '<b>👛 Wallet Pay</b> and <b>Telegram Payments</b> ready. Add custom methods easily',
        'Subscriptions or One-time payments',
      ],
      products: [
        {
          id: '1_month_subscription',
          title: '1 month subscription',
          description: '2$/month',
          discount: '',
          price: 2,
        },
        {
          id: '1_year_subscription',
          title: '1 year subscription',
          description: '1$/month',
          discount: 'Discount 50%',
          price: 12,
        },
        {
          id: 'lifetime_access',
          title: 'Lifetime access',
          description: '20$ once',
          discount: 'Best offer',
          price: 20,
        },
      ],
      mainButtonText: 'Buy for {price}',
      popup: {
        // popup for payment methods choice
        type: 'web',
      },
      links: [
        {
          text: 'Privacy policy',
          href: 'https://google.com',
        },
        {
          text: 'Terms of use',
          href: 'https://google.com',
        },
      ],
    },
  ],
});
