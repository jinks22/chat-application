import React from "react";
import { getSenderNameOf } from "../../utils/getSenderNameOf";
import {  useTranslate } from "react-translate";
import { PARTICIPANT_ADDED, PARTICIPANT_REMOVED } from "../../constants";

const NotificationMessage = ({ message, config }) => {
  const { participantIdentityType, brandName } = config;
  const t = useTranslate("notification-message");

  if( message.participantType === "SYSTEM"){
    return null;
  }

  if (
    message.notificationType == PARTICIPANT_ADDED
  ) {
    return (
      <p data-testid="joined-chat">
        <b>{getSenderNameOf(message, participantIdentityType, brandName)}</b>{" "}
       {t("joined-chat")}
      </p>
    );
  } else if (message.notificationType == PARTICIPANT_REMOVED) {
    return (
      <p>
        <b>{getSenderNameOf(message, participantIdentityType, brandName)} </b>{" "}
        {t("left-chat")}
      </p>
    );
  } else {
    return <></>;
  }
};

export default NotificationMessage;
