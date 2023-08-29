# Lottery Dapp Application

Welcome to the Lottery Dapp Application! This decentralized application (dapp) allows users to participate in lotteries, purchase tickets, and claim prizes using the Solana blockchain. The application is built using the Web3.js library to interact with the Solana blockchain.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## To use the Lottery Dapp Application, follow these steps

1. **Initialize Master Account**: Start by initializing the master account. This account serves as the authority for creating lotteries and handling prize claims.

2. **Create Lottery**: After initializing the master account, you can create a new lottery. Specify the lottery details such as the ticket price, prize amount, and duration.

3. **Buy Tickets**: Participants can buy tickets for the ongoing lotteries. Each ticket purchased increases the chances of winning the prize.

4. **Pick Winner**: Once the lottery ends, the system randomly picks a winner from the pool of participants. The winner's ticket is selected randomly using secure and transparent methods.

5. **Claim Prizes**: All winners can claim their prizes using their ticket IDs. Prizes are distributed based on the lottery's prize structure.

## Features

- Create and manage lotteries with customizable parameters.
- Buy tickets for ongoing lotteries.
- Randomly select winners using secure methods.
- Winners can claim their prizes using their ticket IDs.
- Built using the Web3.js library for seamless interaction with the Solana blockchain.

## Installation

1. Clone this repository to your local machine.
2. Install the required dependencies using `npm install`.

## Usage

1. Run the application using `npm start`.
2. Access the application through your web browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.


## License

This project is licensed under the [MIT License](LICENSE).

---

**Note**: This README is a template. Modify it according to your project's specific details and requirements.



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
