[
  {
    $addFields: {
      startOfMonth: {
        $dateTrunc: {
          date: "$$NOW",
          unit: "month"
        }
      }
    }
  },
  {
    $match: {
      start: {
        $gte: ISODate("2025-03-01")
      },
      archived: false
    }
  },
  {
    $addFields: {
      year: {
        $year: "$start"
      },
      month: {
        $month: "$start"
      }
    }
  },
  {
    $project:
      /**
       * specifications: The fields to
       *   include or exclude.
       */
      {
        startOfMonth: 0,
        source: 0,
        notes: 0,
        tenant: 0,
        archived: 0,
        property: 0
      }
  },
  {
    $group: {
      _id: {
        year: "$year",
        month: "$month"
      },
      bookings: {
        $push: "$$ROOT"
      }
    }
  },
  {
    $sort: {
      "_id.year": 1,
      "_id.month": 1,
      "bookings.start": 1
    }
  },
  {
    $group: {
      _id: "$_id.year",
      months: {
        $push: {
          month: {
            $let: {
              vars: {
                monthsInEnglish: [
                  "",
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December"
                ],
                monthsInFrench: [
                  "",
                  "Janvier",
                  "Février",
                  "Mars",
                  "Avril",
                  "Mai",
                  "Juin",
                  "Juillet",
                  "Août",
                  "Septembre",
                  "Octobre",
                  "Novembre",
                  "Décembre"
                ]
              },
              in: {
                $arrayElemAt: [
                  "$$monthsInEnglish",
                  "$_id.month"
                ]
              }
            }
          },
          monthFR: {
            $let: {
              vars: {
                monthsInFrench: [
                  "",
                  "Janvier",
                  "Février",
                  "Mars",
                  "Avril",
                  "Mai",
                  "Juin",
                  "Juillet",
                  "Août",
                  "Septembre",
                  "Octobre",
                  "Novembre",
                  "Décembre"
                ]
              },
              in: {
                $arrayElemAt: [
                  "$$monthsInFrench",
                  "$_id.month"
                ]
              }
            }
          },
          bookings: "$bookings"
        }
      }
    }
  },
  {
    $sort: {
      _id: 1
    }
  }
]