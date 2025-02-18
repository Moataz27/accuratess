import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

export default {
	introspection: {
		type: "sdl",
		paths: ["./schema.gql"],
	},
	website: {
		template: "carbon-multi-page",
		staticAssets: path.join(__dirname, "assets"),
		options: {
			appTitle: "Accurate Api Documentation",
			appLogo: "/Accurate-logistics.png",
			siteRoot: "/accuratess",
			pages: [
				{
					title: "Accurate Api",
					content: `
            Accurate Api Documentation
            `,
				},
				{
					title: "Callback url",
					content: `
            Webhook callback url to listen any update status occurred to shipment via post request
            -- data returned from callback as a json
            {
              "shipmentId": shipment id,
              "typeCode": type listen for update,
              "shipmentStatusCode": shipment status,
              "returnTypeCode": if shipment returned, type of return,
              "deliveryTypeCode": if shipment delivered, type of delivery,
              "deliveredAmount": amount of delivered,
              "collectedFees": amount of collected fees,
              "deliveryDate": delivery date for shipment,
              "cancellationReasonId": if shipment cancelled, the reason of cancellation,
              "notes": notes for shipment
            }
            `,
				},
			],
			queryGenerationFactories: {
				Time: "00:00",
			},
		},
	},
};
