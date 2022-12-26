import { Document, Page, Text, View } from "@react-pdf/renderer";
import React from "react";

//Agent Invoice(Fly Far Int)

const Pdf1 = () => {
  const table = {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  };
  const tableRow = {
    margin: "auto",
    flexDirection: "row",
  };

  const tableCol = {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding:'2px'
  };

  const tableColfromto = {
    width: "22%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding:'2px'
  };
  const tableColtime = {
    width: "13%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding:'2px'
  };
  
  const tableColflight = {
    width: "15%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding:'2px'
  };
  const tableCol2 = {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  };

  const tableCell = {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  };
  return (
    <Document>
      <Page size="A4" style={{ padding: "27px 20px" }}>
        <View style={{ padding: "15px" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                fontSize: "10px",
                display: "flex",
                width: "180px",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Text
                style={{
                  fontSize: "14px",
                  fontWeight: "900",
                  paddingBottom: "10px",
                }}
              >
                Fly Far International
              </Text>
              <Text>
                Ka-9/A, Hazi Abdul Latif Mantion, Bashundhara Rd, Dhaka 1229.
              </Text>
              <Text>Email: support@flywayint.com</Text>
              <Text>Phone: 09606912912</Text>
            </View>
            <View
              style={{
                color: "#D3D3D3",
                fontSize: "35px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Text>Agent Invoice</Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              fontSize: "12px",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "10px",
            }}
          >
            <Text>Reference: FFB1993</Text>
            <Text>Ticketed: 11 Dec 2022 </Text>
            <Text>Refundable | ONEWAY </Text>
          </View>

          <View style={{ fontSize: "10px" }}>
            <Text
              style={{
                fontSize: "12px",
                fontWeight: "900",
                padding: "10px 0px",
              }}
            >
              Company Name: Fly Far Tech
            </Text>
            <Text style={{ paddingBottom: "5px" }}>Booked By: - FFST1002</Text>
            <Text style={{ paddingBottom: "5px" }}>Email: cto@flyfar.tech</Text>
            <Text style={{ paddingBottom: "5px" }}>Phone: 8806969696969</Text>
          </View>

          <View>
            <Text
              style={{
                fontSize: "12px",
                color: "#03437B",
                padding: "20px 0px",
              }}
            >
              PASSENGER DETAILS
            </Text>
            <View style={table}>
              <View style={{ margin: "auto", flexDirection: "row" }}>
                <View style={tableCol}>
                  <Text style={tableCell}>Passenger Name </Text>
                </View>
                <View style={tableCol}>
                  <Text style={tableCell}>Gender</Text>
                </View>
                <View style={tableCol}>
                  <Text style={tableCell}>Passenger Type</Text>
                </View>
                <View style={tableCol}>
                  <Text style={tableCell}>Passport Number</Text>
                </View>
              </View>
              <View style={tableRow}>
                <View style={tableCol}>
                  <Text style={tableCell}>MR MD UZZAL HOSSAIN </Text>
                </View>
                <View style={tableCol}>
                  <Text style={tableCell}>Male </Text>
                </View>
                <View style={tableCol}>
                  <Text style={tableCell}>Adult</Text>
                </View>
                <View style={tableCol}>
                  <Text style={tableCell}>12345678925</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text
              style={{
                fontSize: "12px",
                color: "#03437B",
                padding: "20px 0px",
              }}
            >
              FLIGHT ITINERARIES
            </Text>
            <View style={table}>
              <View style={{ margin: "auto", flexDirection: "row" }}>
                <View style={tableColflight}>
                  <Text style={tableCell}>Flight </Text>
                </View>
                <View style={tableColfromto}>
                  <Text style={tableCell}>Departure From</Text>
                </View>
                <View style={tableColfromto}>
                  <Text style={tableCell}>Arrival To</Text>
                </View>
                <View style={tableColtime}>
                  <Text style={tableCell}>Depart At</Text>
                </View>
                <View style={tableColtime}>
                  <Text style={tableCell}>Arrive At</Text>
                </View>
                <View style={tableColflight}>
                  <Text style={tableCell}>Info</Text>
                </View>
              </View>
              <View style={tableRow}>
                <View style={tableColflight}>
                  <Text style={tableCell}>Vistara</Text>
                  <Text style={tableCell}> UK 184</Text>
                </View>
                <View style={tableColfromto}>
                  <Text style={tableCell}>
                    (DAC)-Dhaka-Hazrat Shahjalal International Airport Terminal:
                    1
                  </Text>
                </View>
                <View style={tableColfromto}>
                  <Text style={tableCell}>
                    (BOM)-MumbaiCh Shivaji Maharaj International
                    Airport Terminal: 2
                  </Text>
                </View>
                <View style={tableColtime}>
                  <Text style={tableCell}>02 Mar 2023 12:00 PM</Text>
                </View>
                <View style={tableColtime}>
                  <Text style={tableCell}>02 Mar 2023 02:45 PM</Text>
                </View>
                <View style={tableColflight}>
                  <Text style={tableCell}>
                    Cabin: 7Kg Class: W Baggage: ADT-30K Duration: 3h 15m
                  </Text>
                </View>
              </View>
              <View style={tableRow}>
                <View style={tableColflight}>
                  <Text style={tableCell}>Vistara</Text>
                  <Text style={tableCell}> UK 184</Text>
                </View>
                <View style={tableColfromto}>
                  <Text style={tableCell}>
                    (DAC)-Dhaka-Hazrat Shahjalal International Airport Terminal:
                    1
                  </Text>
                </View>
                <View style={tableColfromto}>
                  <Text style={tableCell}>
                    (BOM)-MumbaiCh Shivaji Maharaj International
                    Airport Terminal: 2
                  </Text>
                </View>
                <View style={tableColtime}>
                  <Text style={tableCell}>02 Mar 2023 12:00 PM</Text>
                </View>
                <View style={tableColtime}>
                  <Text style={tableCell}>02 Mar 2023 02:45 PM</Text>
                </View>
                <View style={tableColflight}>
                  <Text style={tableCell}>
                    Cabin: 7Kg Class: W Baggage: ADT-30K Duration: 3h 15m
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text
              style={{
                fontSize: "12px",
                color: "#03437B",
                padding: "20px 0px",
              }}
            >
              PRICE BREAKDOWN
            </Text>
            <View style={table}>
              <View style={{ margin: "auto", flexDirection: "row" }}>
                <View style={tableCol}>
                  <Text style={tableCell}>Passenger</Text>
                </View>
                <View style={tableCol}>
                  <Text style={tableCell}>Base Fare</Text>
                </View>
                <View style={tableCol}>
                  <Text style={tableCell}>Tax</Text>
                </View>
                <View style={tableCol}>
                  <Text style={tableCell}>Total Fare</Text>
                </View>
              </View>
              <View style={tableRow}>
                <View style={tableCol}>
                  <Text style={tableCell}>Adult X1 </Text>
                </View>
                <View style={tableCol}>
                  <Text style={tableCell}>24,777 BDT </Text>
                </View>
                <View style={tableCol}>
                  <Text style={tableCell}>8,207 BDT </Text>
                </View>
                <View style={tableCol}>
                  <Text style={tableCell}>32,984 BDT</Text>
                </View>
              </View>
              <View style={tableRow}>
                <View style={tableCol2}>
                  <Text style={tableCell}>Grand TOTAL: 32,984 BDT</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{display:'flex', flexDirection:'row', width:'60%', fontSize:'12px', alignItems:'center', justifyContent:'space-between', margin:'20px 0px', border:'1px solid grey', padding:'10px'}}>
            <View>
               <Text>Base fare total amount
</Text>
               <Text>Tax</Text>
               <Text>Discount</Text>
               <Text>----------------------------------------</Text>
               <Text>Agent Total Ticket fare Amount</Text>
            </View>
            <View>
              <Text>24,678 BDT</Text>
              <Text>8,207 BDT
</Text>
              <Text>1,851 BDT</Text>
              <Text>----------------</Text>
              <Text>31,133 BDT
</Text>
            </View>
          </View>

          <View>
            <Text    style={{
                fontSize: "12px",
                color: "#03437B",
                padding: "10px 0px",
              }}>In Words: Thirty One Thousand One Hundred Thirty Three Taka Only</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Pdf1;
