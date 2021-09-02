import React from "react"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import * as faqStyles from "./faq.module.scss"

const Faq = () => {
  return (
    <div className={faqStyles.faq}>
      <h2 className={faqStyles.h2}>FAQ</h2>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ backgroundColor: "#eee" }}
        >
          <Typography
            style={{
              fontFamily:
                "Connection III, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
              fontSize: "1.25em",
            }}
          >
            How can I buy a Zombit?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "#fff" }}>
          <Typography
            style={{
              fontFamily:
                "Connection III, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
              fontSize: "1.25em",
              margin: "auto",
            }}
          >
            Missed the sale? No worries! Head to{" "}
            <a
              href="https://cnft.io/marketplace.php?s=Zombits"
              target="_blank"
              rel="noreferrer"
            >
              CNFT.io
            </a>{" "}
            to buy a Zombit now!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ backgroundColor: "#eee" }}
        >
          <Typography
            style={{
              fontFamily:
                "Connection III, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
              fontSize: "1.25em",
            }}
          >
            Are these really NFTs?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "#fff" }}>
          <Typography
            style={{
              fontFamily:
                "Connection III, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
              fontSize: "1.25em",
              margin: "auto",
            }}
          >
            Yes!
            <br />
            These Zombits were minted using a{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://cardanoscan.io/tokenPolicy/ad6290066292cfeef7376cd575e5d8367833ab3d8b2ac53d26ae4ecc"
            >
              time-locked policy
            </a>
            , meaning that no more Zombits can be created (minted) or destroyed
            (burned) after a certain amount of time.
            <br />
            That certain amount of time has passed, and all 10,000 Zombits have
            been minted, meaning there will only ever be one of each 10,000
            Zombits!
            <br />
            Therefore, by definition, all Zombits are NFTs.
            <br />
            You can view the minting policy{" "}
            <a
              href="https://pool.pm/policy/ad6290066292cfeef7376cd575e5d8367833ab3d8b2ac53d26ae4ecc"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ backgroundColor: "#eee" }}
        >
          <Typography
            style={{
              fontFamily:
                "Connection III, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
              fontSize: "1.25em",
            }}
          >
            Where are the metadata?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "#fff" }}>
          <Typography
            style={{
              fontFamily:
                "Connection III, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
              fontSize: "1.25em",
              margin: "auto",
            }}
          >
            The metadata for each Zombit are on-chain. The metadata contains
            IPFS and Arweave links in order to keep the Zombits immutable and
            retrievable forever.
            <br />
            The metadata are in the minting transactions of the tokens. To see
            an example, view this{" "}
            <a
              href="https://cardanoscan.io/transaction/49d840383d2729886f146ca6d8fc4210c066c4810fec5847cb3a168ef9cf9f1b?tab=metadata"
              target="_blank"
              rel="noreferrer"
            >
              minting transaction
            </a>
            , scroll down to the metadata tab, and click on the metadata.
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Faq
