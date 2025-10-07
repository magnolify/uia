import type { ShopifyOrder } from './types';

export const SAMPLE_ORDER: ShopifyOrder = {
  "id": 5893217321195,
  "admin_graphql_api_id": "gid://shopify/Order/5893217321195",
  "app_id": 580111,
  "browser_ip": "67.187.42.247",
  "buyer_accepts_marketing": true,
  "cancel_reason": null,
  "cancelled_at": null,
  "cart_token": "Z2NwLXVzLWNlbnRyYWwxOjAxSjY3VzM5NVIzUUVWWEhNWDk1VlMxSFpG",
  "checkout_id": 35071460081899,
  "checkout_token": "d7a14550c6cab5455676f4851057ca04",
  "client_details": {
    "accept_language": "en",
    "browser_height": null,
    "browser_ip": "67.187.42.247",
    "browser_width": null,
    "session_hash": null,
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
  },
  "closed_at": "2024-08-30T18:57:10-04:00",
  "confirmation_number": "56G0J8QDL",
  "confirmed": true,
  "contact_email": "admin@pierceandparkerinteriors.com",
  "created_at": "2024-08-29T16:36:59-04:00",
  "currency": "USD",
  "current_subtotal_price": "1950.92",
  "current_subtotal_price_set": {
    "shop_money": {
      "amount": "1950.92",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "1950.92",
      "currency_code": "USD"
    }
  },
  "current_total_additional_fees_set": null,
  "current_total_discounts": "836.12",
  "current_total_discounts_set": {
    "shop_money": {
      "amount": "836.12",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "836.12",
      "currency_code": "USD"
    }
  },
  "current_total_duties_set": null,
  "current_total_price": "2159.92",
  "current_total_price_set": {
    "shop_money": {
      "amount": "2159.92",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "2159.92",
      "currency_code": "USD"
    }
  },
  "current_total_tax": "0.00",
  "current_total_tax_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "USD"
    }
  },
  "customer_locale": "en-US",
  "device_id": null,
  "discount_codes": [
    {
      "code": "SD30",
      "amount": "836.12",
      "type": "percentage"
    }
  ],
  "email": "admin@pierceandparkerinteriors.com",
  "estimated_taxes": false,
  "financial_status": "paid",
  "fulfillment_status": "fulfilled",
  "landing_site": "/",
  "landing_site_ref": null,
  "location_id": null,
  "merchant_of_record_app_id": null,
  "name": "#1217",
  "note": "PO# 19328",
  "note_attributes": [
    {
      "name": "Checkout-Method",
      "value": "shipping"
    }
  ],
  "number": 217,
  "order_number": 1217,
  "order_status_url": "https://www.itsunderitall.com/65842577643/orders/71bd05bc84965dc9001ec2d931fc2f5d/authenticate?key=b7d730d10f3437066d09b45beb8491fe",
  "original_total_additional_fees_set": null,
  "original_total_duties_set": null,
  "payment_gateway_names": [
    "shopify_payments"
  ],
  "phone": "+19126383641",
  "po_number": null,
  "presentment_currency": "USD",
  "processed_at": "2024-08-29T16:36:56-04:00",
  "reference": "7d393194b447464bf88d22baa2cf6ceb",
  "referring_site": "https://www.google.com/",
  "source_identifier": "7d393194b447464bf88d22baa2cf6ceb",
  "source_name": "web",
  "source_url": null,
  "subtotal_price": "1950.92",
  "subtotal_price_set": {
    "shop_money": {
      "amount": "1950.92",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "1950.92",
      "currency_code": "USD"
    }
  },
  "tags": "sales_rep_bruce150",
  "tax_exempt": false,
  "tax_lines": [],
  "taxes_included": false,
  "test": false,
  "token": "71bd05bc84965dc9001ec2d931fc2f5d",
  "total_discounts": "836.12",
  "total_discounts_set": {
    "shop_money": {
      "amount": "836.12",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "836.12",
      "currency_code": "USD"
    }
  },
  "total_line_items_price": "2787.04",
  "total_line_items_price_set": {
    "shop_money": {
      "amount": "2787.04",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "2787.04",
      "currency_code": "USD"
    }
  },
  "total_outstanding": "0.00",
  "total_price": "2159.92",
  "total_price_set": {
    "shop_money": {
      "amount": "2159.92",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "2159.92",
      "currency_code": "USD"
    }
  },
  "total_shipping_price_set": {
    "shop_money": {
      "amount": "209.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "209.00",
      "currency_code": "USD"
    }
  },
  "total_tax": "0.00",
  "total_tax_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "USD"
    }
  },
  "total_tip_received": "0.00",
  "total_weight": 0,
  "updated_at": "2024-09-06T11:25:36-04:00",
  "user_id": null,
  "billing_address": {
    "first_name": "MATT",
    "address1": "3413 FREDERICA RD",
    "phone": null,
    "city": "ST SIMONS ISLAND",
    "zip": "31522",
    "province": "Georgia",
    "country": "United States",
    "last_name": "DART",
    "address2": null,
    "company": null,
    "latitude": null,
    "longitude": null,
    "name": "MATT DART",
    "country_code": "US",
    "province_code": "GA"
  },
  "customer": {
    "id": 7604191985899,
    "created_at": "2024-08-26T12:51:30-04:00",
    "updated_at": "2025-09-15T14:04:31-04:00",
    "first_name": "Matt",
    "last_name": "Dart",
    "state": "enabled",
    "note": null,
    "verified_email": true,
    "multipass_identifier": null,
    "tax_exempt": false,
    "email_marketing_consent": {
      "state": "subscribed",
      "opt_in_level": "single_opt_in",
      "consent_updated_at": "2024-08-26T12:52:49-04:00"
    },
    "sms_marketing_consent": {
      "state": "not_subscribed",
      "opt_in_level": "single_opt_in",
      "consent_updated_at": null,
      "consent_collected_from": "OTHER"
    },
    "tags": "sales_rep_bruce150",
    "email": "admin@pierceandparkerinteriors.com",
    "phone": "+19126383641",
    "currency": "USD",
    "tax_exemptions": [
      "US_GA_RESELLER_EXEMPTION"
    ],
    "admin_graphql_api_id": "gid://shopify/Customer/7604191985899",
    "default_address": {
      "id": 9177555239147,
      "customer_id": 7604191985899,
      "first_name": "MATT",
      "last_name": "DART",
      "company": "PIERCE AND PARKER INTERIORS",
      "address1": "3413 FREDERICA RD",
      "address2": "",
      "city": "ST SIMONS ISLAND",
      "province": "Georgia",
      "country": "United States",
      "zip": "31522",
      "phone": "9126383641",
      "name": "MATT DART",
      "province_code": "GA",
      "country_code": "US",
      "country_name": "United States",
      "default": true
    }
  },
  "discount_applications": [
    {
      "target_type": "line_item",
      "type": "discount_code",
      "value": "30.0",
      "value_type": "percentage",
      "allocation_method": "across",
      "target_selection": "all",
      "code": "SD30"
    }
  ],
  "fulfillments": [
    {
      "id": 5305427689707,
      "admin_graphql_api_id": "gid://shopify/Fulfillment/5305427689707",
      "created_at": "2024-08-30T18:57:09-04:00",
      "location_id": 70440812779,
      "name": "#1217.1",
      "order_id": 5893217321195,
      "origin_address": {

      },
      "receipt": {

      },
      "service": "manual",
      "shipment_status": "delivered",
      "status": "success",
      "tracking_company": "UPS®",
      "tracking_number": "1ZG9857H0309568860",
      "tracking_numbers": [
        "1ZG9857H0309568860"
      ],
      "tracking_url": "https://www.ups.com/WebTracking?loc=en_US&requester=ST&trackNums=1ZG9857H0309568860",
      "tracking_urls": [
        "https://www.ups.com/WebTracking?loc=en_US&requester=ST&trackNums=1ZG9857H0309568860"
      ],
      "updated_at": "2024-09-06T10:39:48-04:00",
      "line_items": [
        {
          "id": 14771597541611,
          "admin_graphql_api_id": "gid://shopify/LineItem/14771597541611",
          "attributed_staffs": [],
          "current_quantity": 1,
          "fulfillable_quantity": 0,
          "fulfillment_service": "manual",
          "fulfillment_status": "fulfilled",
          "gift_card": false,
          "grams": 0,
          "name": "Custom Rug Pads - Default_cpc_4F6B541A98894",
          "pre_tax_price": "179.92",
          "pre_tax_price_set": {
            "shop_money": {
              "amount": "179.92",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "179.92",
              "currency_code": "USD"
            }
          },
          "price": "257.04",
          "price_set": {
            "shop_money": {
              "amount": "257.04",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "257.04",
              "currency_code": "USD"
            }
          },
          "product_exists": true,
          "product_id": 8256219087083,
          "properties": [
            {
              "name": "Choose Rug Shape ",
              "value": "Rectangle"
            },
            {
              "name": "Choose Thickness",
              "value": "LUXE LITE felted"
            },
            {
              "name": "Rectangle Width (ft)",
              "value": "12 ft"
            },
            {
              "name": "Rectangle Width (in)",
              "value": "0 in"
            },
            {
              "name": "Rectangle Length (ft)",
              "value": "14 ft"
            },
            {
              "name": "Rectangle Length (in)",
              "value": "0 in"
            },
            {
              "name": "Project Name ",
              "value": "CAMPO"
            },
            {
              "name": "Install Location",
              "value": "PIANO ROOM"
            }
          ],
          "quantity": 1,
          "requires_shipping": true,
          "sku": "Custom",
          "taxable": true,
          "title": "Custom Rug Pads",
          "total_discount": "0.00",
          "total_discount_set": {
            "shop_money": {
              "amount": "0.00",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "0.00",
              "currency_code": "USD"
            }
          },
          "variant_id": 45768083669227,
          "variant_inventory_management": null,
          "variant_title": "Default_cpc_4F6B541A98894",
          "vendor": "UNDER IT ALL",
          "tax_lines": [],
          "duties": [],
          "discount_allocations": [
            {
              "amount": "77.12",
              "amount_set": {
                "shop_money": {
                  "amount": "77.12",
                  "currency_code": "USD"
                },
                "presentment_money": {
                  "amount": "77.12",
                  "currency_code": "USD"
                }
              },
              "discount_application_index": 0
            }
          ]
        },
        {
          "id": 14771597574379,
          "admin_graphql_api_id": "gid://shopify/LineItem/14771597574379",
          "attributed_staffs": [],
          "current_quantity": 1,
          "fulfillable_quantity": 0,
          "fulfillment_service": "manual",
          "fulfillment_status": "fulfilled",
          "gift_card": false,
          "grams": 0,
          "name": "Custom Rug Pads - Default_cpc_56EC25CA542E4",
          "pre_tax_price": "204.46",
          "pre_tax_price_set": {
            "shop_money": {
              "amount": "204.46",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "204.46",
              "currency_code": "USD"
            }
          },
          "price": "292.10",
          "price_set": {
            "shop_money": {
              "amount": "292.10",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "292.10",
              "currency_code": "USD"
            }
          },
          "product_exists": true,
          "product_id": 8256219087083,
          "properties": [
            {
              "name": "Choose Rug Shape ",
              "value": "Rectangle"
            },
            {
              "name": "Choose Thickness",
              "value": "LUXE LITE felted"
            },
            {
              "name": "Rectangle Width (ft)",
              "value": "13 ft"
            },
            {
              "name": "Rectangle Width (in)",
              "value": "2 in"
            },
            {
              "name": "Rectangle Length (ft)",
              "value": "14 ft"
            },
            {
              "name": "Rectangle Length (in)",
              "value": "6 in"
            },
            {
              "name": "Project Name ",
              "value": "CAMPO -- "
            },
            {
              "name": "Install Location",
              "value": "FAMILY ROOM"
            }
          ],
          "quantity": 1,
          "requires_shipping": true,
          "sku": "Custom",
          "taxable": true,
          "title": "Custom Rug Pads",
          "total_discount": "0.00",
          "total_discount_set": {
            "shop_money": {
              "amount": "0.00",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "0.00",
              "currency_code": "USD"
            }
          },
          "variant_id": 45768080228587,
          "variant_inventory_management": null,
          "variant_title": "Default_cpc_56EC25CA542E4",
          "vendor": "UNDER IT ALL",
          "tax_lines": [],
          "duties": [],
          "discount_allocations": [
            {
              "amount": "87.64",
              "amount_set": {
                "shop_money": {
                  "amount": "87.64",
                  "currency_code": "USD"
                },
                "presentment_money": {
                  "amount": "87.64",
                  "currency_code": "USD"
                }
              },
              "discount_application_index": 0
            }
          ]
        },
        {
          "id": 14771597607147,
          "admin_graphql_api_id": "gid://shopify/LineItem/14771597607147",
          "attributed_staffs": [],
          "current_quantity": 1,
          "fulfillable_quantity": 0,
          "fulfillment_service": "manual",
          "fulfillment_status": "fulfilled",
          "gift_card": false,
          "grams": 0,
          "name": "Custom Rug Pads - Default_cpc_8BDAC4BE36BD4",
          "pre_tax_price": "84.56",
          "pre_tax_price_set": {
            "shop_money": {
              "amount": "84.56",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "84.56",
              "currency_code": "USD"
            }
          },
          "price": "120.80",
          "price_set": {
            "shop_money": {
              "amount": "120.80",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "120.80",
              "currency_code": "USD"
            }
          },
          "product_exists": true,
          "product_id": 8256219087083,
          "properties": [
            {
              "name": "Choose Rug Shape ",
              "value": "Rectangle"
            },
            {
              "name": "Choose Thickness",
              "value": "LUXE LITE felted"
            },
            {
              "name": "Rectangle Width (ft)",
              "value": "8 ft"
            },
            {
              "name": "Rectangle Width (in)",
              "value": "0 in"
            },
            {
              "name": "Rectangle Length (ft)",
              "value": "10 ft"
            },
            {
              "name": "Rectangle Length (in)",
              "value": "0 in"
            },
            {
              "name": "Project Name ",
              "value": "DRUMMOND "
            },
            {
              "name": "Install Location",
              "value": "MASTER BEDROOM"
            }
          ],
          "quantity": 1,
          "requires_shipping": true,
          "sku": "Custom",
          "taxable": true,
          "title": "Custom Rug Pads",
          "total_discount": "0.00",
          "total_discount_set": {
            "shop_money": {
              "amount": "0.00",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "0.00",
              "currency_code": "USD"
            }
          },
          "variant_id": 45768029667563,
          "variant_inventory_management": null,
          "variant_title": "Default_cpc_8BDAC4BE36BD4",
          "vendor": "UNDER IT ALL",
          "tax_lines": [],
          "duties": [],
          "discount_allocations": [
            {
              "amount": "36.24",
              "amount_set": {
                "shop_money": {
                  "amount": "36.24",
                  "currency_code": "USD"
                },
                "presentment_money": {
                  "amount": "36.24",
                  "currency_code": "USD"
                }
              },
              "discount_application_index": 0
            }
          ]
        },
        {
          "id": 14771597639915,
          "admin_graphql_api_id": "gid://shopify/LineItem/14771597639915",
          "attributed_staffs": [],
          "current_quantity": 1,
          "fulfillable_quantity": 0,
          "fulfillment_service": "manual",
          "fulfillment_status": "fulfilled",
          "gift_card": false,
          "grams": 0,
          "name": "Custom Rug Pads - Default_cpc_1BB86C8CA93C4",
          "pre_tax_price": "164.94",
          "pre_tax_price_set": {
            "shop_money": {
              "amount": "164.94",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "164.94",
              "currency_code": "USD"
            }
          },
          "price": "235.62",
          "price_set": {
            "shop_money": {
              "amount": "235.62",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "235.62",
              "currency_code": "USD"
            }
          },
          "product_exists": true,
          "product_id": 8256219087083,
          "properties": [
            {
              "name": "Choose Rug Shape ",
              "value": "Rectangle"
            },
            {
              "name": "Choose Thickness",
              "value": "LUXE LITE felted"
            },
            {
              "name": "Rectangle Width (ft)",
              "value": "11 ft"
            },
            {
              "name": "Rectangle Width (in)",
              "value": "0 in"
            },
            {
              "name": "Rectangle Length (ft)",
              "value": "14 ft"
            },
            {
              "name": "Rectangle Length (in)",
              "value": "0 in"
            },
            {
              "name": "Project Name ",
              "value": "DRUMMOND "
            },
            {
              "name": "Install Location",
              "value": "LIVING ROOM"
            }
          ],
          "quantity": 1,
          "requires_shipping": true,
          "sku": "Custom",
          "taxable": true,
          "title": "Custom Rug Pads",
          "total_discount": "0.00",
          "total_discount_set": {
            "shop_money": {
              "amount": "0.00",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "0.00",
              "currency_code": "USD"
            }
          },
          "variant_id": 45768027832555,
          "variant_inventory_management": null,
          "variant_title": "Default_cpc_1BB86C8CA93C4",
          "vendor": "UNDER IT ALL",
          "tax_lines": [],
          "duties": [],
          "discount_allocations": [
            {
              "amount": "70.68",
              "amount_set": {
                "shop_money": {
                  "amount": "70.68",
                  "currency_code": "USD"
                },
                "presentment_money": {
                  "amount": "70.68",
                  "currency_code": "USD"
                }
              },
              "discount_application_index": 0
            }
          ]
        },
        {
          "id": 14771597672683,
          "admin_graphql_api_id": "gid://shopify/LineItem/14771597672683",
          "attributed_staffs": [],
          "current_quantity": 1,
          "fulfillable_quantity": 0,
          "fulfillment_service": "manual",
          "fulfillment_status": "fulfilled",
          "gift_card": false,
          "grams": 0,
          "name": "Custom Rug Pads - Default_cpc_1611FB9B488B4",
          "pre_tax_price": "115.67",
          "pre_tax_price_set": {
            "shop_money": {
              "amount": "115.67",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "115.67",
              "currency_code": "USD"
            }
          },
          "price": "165.24",
          "price_set": {
            "shop_money": {
              "amount": "165.24",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "165.24",
              "currency_code": "USD"
            }
          },
          "product_exists": true,
          "product_id": 8256219087083,
          "properties": [
            {
              "name": "Choose Rug Shape ",
              "value": "Rectangle"
            },
            {
              "name": "Choose Thickness",
              "value": "LUXE LITE felted"
            },
            {
              "name": "Rectangle Width (ft)",
              "value": "9 ft"
            },
            {
              "name": "Rectangle Width (in)",
              "value": "0 in"
            },
            {
              "name": "Rectangle Length (ft)",
              "value": "12 ft"
            },
            {
              "name": "Rectangle Length (in)",
              "value": "0 in"
            },
            {
              "name": "Project Name ",
              "value": "RINGSBY "
            },
            {
              "name": "Install Location",
              "value": ""
            }
          ],
          "quantity": 1,
          "requires_shipping": true,
          "sku": "Custom",
          "taxable": true,
          "title": "Custom Rug Pads",
          "total_discount": "0.00",
          "total_discount_set": {
            "shop_money": {
              "amount": "0.00",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "0.00",
              "currency_code": "USD"
            }
          },
          "variant_id": 45768179712235,
          "variant_inventory_management": null,
          "variant_title": "Default_cpc_1611FB9B488B4",
          "vendor": "UNDER IT ALL",
          "tax_lines": [],
          "duties": [],
          "discount_allocations": [
            {
              "amount": "49.57",
              "amount_set": {
                "shop_money": {
                  "amount": "49.57",
                  "currency_code": "USD"
                },
                "presentment_money": {
                  "amount": "49.57",
                  "currency_code": "USD"
                }
              },
              "discount_application_index": 0
            }
          ]
        },
        {
          "id": 14771597705451,
          "admin_graphql_api_id": "gid://shopify/LineItem/14771597705451",
          "attributed_staffs": [],
          "current_quantity": 6,
          "fulfillable_quantity": 0,
          "fulfillment_service": "manual",
          "fulfillment_status": "fulfilled",
          "gift_card": false,
          "grams": 0,
          "name": "Custom Rug Pads - Default_cpc_147783211F4F4",
          "pre_tax_price": "694.01",
          "pre_tax_price_set": {
            "shop_money": {
              "amount": "694.01",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "694.01",
              "currency_code": "USD"
            }
          },
          "price": "165.24",
          "price_set": {
            "shop_money": {
              "amount": "165.24",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "165.24",
              "currency_code": "USD"
            }
          },
          "product_exists": true,
          "product_id": 8256219087083,
          "properties": [
            {
              "name": "Choose Rug Shape ",
              "value": "Rectangle"
            },
            {
              "name": "Choose Thickness",
              "value": "LUXE LITE felted"
            },
            {
              "name": "Rectangle Width (ft)",
              "value": "9 ft"
            },
            {
              "name": "Rectangle Width (in)",
              "value": "0 in"
            },
            {
              "name": "Rectangle Length (ft)",
              "value": "12 ft"
            },
            {
              "name": "Rectangle Length (in)",
              "value": "0 in"
            },
            {
              "name": "Project Name ",
              "value": "STOCK"
            },
            {
              "name": "Install Location",
              "value": ""
            }
          ],
          "quantity": 6,
          "requires_shipping": true,
          "sku": "Custom",
          "taxable": true,
          "title": "Custom Rug Pads",
          "total_discount": "0.00",
          "total_discount_set": {
            "shop_money": {
              "amount": "0.00",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "0.00",
              "currency_code": "USD"
            }
          },
          "variant_id": 45768184529131,
          "variant_inventory_management": null,
          "variant_title": "Default_cpc_147783211F4F4",
          "vendor": "UNDER IT ALL",
          "tax_lines": [],
          "duties": [],
          "discount_allocations": [
            {
              "amount": "297.43",
              "amount_set": {
                "shop_money": {
                  "amount": "297.43",
                  "currency_code": "USD"
                },
                "presentment_money": {
                  "amount": "297.43",
                  "currency_code": "USD"
                }
              },
              "discount_application_index": 0
            }
          ]
        },
        {
          "id": 14771597738219,
          "admin_graphql_api_id": "gid://shopify/LineItem/14771597738219",
          "attributed_staffs": [],
          "current_quantity": 6,
          "fulfillable_quantity": 0,
          "fulfillment_service": "manual",
          "fulfillment_status": "fulfilled",
          "gift_card": false,
          "grams": 0,
          "name": "Custom Rug Pads - Default_cpc_72A1CF04CFF54",
          "pre_tax_price": "507.36",
          "pre_tax_price_set": {
            "shop_money": {
              "amount": "507.36",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "507.36",
              "currency_code": "USD"
            }
          },
          "price": "120.80",
          "price_set": {
            "shop_money": {
              "amount": "120.80",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "120.80",
              "currency_code": "USD"
            }
          },
          "product_exists": true,
          "product_id": 8256219087083,
          "properties": [
            {
              "name": "Choose Rug Shape ",
              "value": "Rectangle"
            },
            {
              "name": "Choose Thickness",
              "value": "LUXE LITE felted"
            },
            {
              "name": "Rectangle Width (ft)",
              "value": "8 ft"
            },
            {
              "name": "Rectangle Width (in)",
              "value": "0 in"
            },
            {
              "name": "Rectangle Length (ft)",
              "value": "10 ft"
            },
            {
              "name": "Rectangle Length (in)",
              "value": "0 in"
            },
            {
              "name": "Project Name ",
              "value": "STOCK"
            },
            {
              "name": "Install Location",
              "value": ""
            }
          ],
          "quantity": 6,
          "requires_shipping": true,
          "sku": "Custom",
          "taxable": true,
          "title": "Custom Rug Pads",
          "total_discount": "0.00",
          "total_discount_set": {
            "shop_money": {
              "amount": "0.00",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "0.00",
              "currency_code": "USD"
            }
          },
          "variant_id": 45768186691819,
          "variant_inventory_management": null,
          "variant_title": "Default_cpc_72A1CF04CFF54",
          "vendor": "UNDER IT ALL",
          "tax_lines": [],
          "duties": [],
          "discount_allocations": [
            {
              "amount": "217.44",
              "amount_set": {
                "shop_money": {
                  "amount": "217.44",
                  "currency_code": "USD"
                },
                "presentment_money": {
                  "amount": "217.44",
                  "currency_code": "USD"
                }
              },
              "discount_application_index": 0
            }
          ]
        }
      ]
    }
  ],
  "line_items": [
    {
      "id": 14771597541611,
      "admin_graphql_api_id": "gid://shopify/LineItem/14771597541611",
      "attributed_staffs": [],
      "current_quantity": 1,
      "fulfillable_quantity": 0,
      "fulfillment_service": "manual",
      "fulfillment_status": "fulfilled",
      "gift_card": false,
      "grams": 0,
      "name": "Custom Rug Pads - Default_cpc_4F6B541A98894",
      "pre_tax_price": "179.92",
      "pre_tax_price_set": {
        "shop_money": {
          "amount": "179.92",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "179.92",
          "currency_code": "USD"
        }
      },
      "price": "257.04",
      "price_set": {
        "shop_money": {
          "amount": "257.04",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "257.04",
          "currency_code": "USD"
        }
      },
      "product_exists": true,
      "product_id": 8256219087083,
      "properties": [
        {
          "name": "Choose Rug Shape ",
          "value": "Rectangle"
        },
        {
          "name": "Choose Thickness",
          "value": "LUXE LITE felted"
        },
        {
          "name": "Rectangle Width (ft)",
          "value": "12 ft"
        },
        {
          "name": "Rectangle Width (in)",
          "value": "0 in"
        },
        {
          "name": "Rectangle Length (ft)",
          "value": "14 ft"
        },
        {
          "name": "Rectangle Length (in)",
          "value": "0 in"
        },
        {
          "name": "Project Name ",
          "value": "CAMPO"
        },
        {
          "name": "Install Location",
          "value": "PIANO ROOM"
        }
      ],
      "quantity": 1,
      "requires_shipping": true,
      "sku": "Custom",
      "taxable": true,
      "title": "Custom Rug Pads",
      "total_discount": "0.00",
      "total_discount_set": {
        "shop_money": {
          "amount": "0.00",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "0.00",
          "currency_code": "USD"
        }
      },
      "variant_id": 45768083669227,
      "variant_inventory_management": null,
      "variant_title": "Default_cpc_4F6B541A98894",
      "vendor": "UNDER IT ALL",
      "tax_lines": [],
      "duties": [],
      "discount_allocations": [
        {
          "amount": "77.12",
          "amount_set": {
            "shop_money": {
              "amount": "77.12",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "77.12",
              "currency_code": "USD"
            }
          },
          "discount_application_index": 0
        }
      ]
    },
    {
      "id": 14771597574379,
      "admin_graphql_api_id": "gid://shopify/LineItem/14771597574379",
      "attributed_staffs": [],
      "current_quantity": 1,
      "fulfillable_quantity": 0,
      "fulfillment_service": "manual",
      "fulfillment_status": "fulfilled",
      "gift_card": false,
      "grams": 0,
      "name": "Custom Rug Pads - Default_cpc_56EC25CA542E4",
      "pre_tax_price": "204.46",
      "pre_tax_price_set": {
        "shop_money": {
          "amount": "204.46",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "204.46",
          "currency_code": "USD"
        }
      },
      "price": "292.10",
      "price_set": {
        "shop_money": {
          "amount": "292.10",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "292.10",
          "currency_code": "USD"
        }
      },
      "product_exists": true,
      "product_id": 8256219087083,
      "properties": [
        {
          "name": "Choose Rug Shape ",
          "value": "Rectangle"
        },
        {
          "name": "Choose Thickness",
          "value": "LUXE LITE felted"
        },
        {
          "name": "Rectangle Width (ft)",
          "value": "13 ft"
        },
        {
          "name": "Rectangle Width (in)",
          "value": "2 in"
        },
        {
          "name": "Rectangle Length (ft)",
          "value": "14 ft"
        },
        {
          "name": "Rectangle Length (in)",
          "value": "6 in"
        },
        {
          "name": "Project Name ",
          "value": "CAMPO -- "
        },
        {
          "name": "Install Location",
          "value": "FAMILY ROOM"
        }
      ],
      "quantity": 1,
      "requires_shipping": true,
      "sku": "Custom",
      "taxable": true,
      "title": "Custom Rug Pads",
      "total_discount": "0.00",
      "total_discount_set": {
        "shop_money": {
          "amount": "0.00",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "0.00",
          "currency_code": "USD"
        }
      },
      "variant_id": 45768080228587,
      "variant_inventory_management": null,
      "variant_title": "Default_cpc_56EC25CA542E4",
      "vendor": "UNDER IT ALL",
      "tax_lines": [],
      "duties": [],
      "discount_allocations": [
        {
          "amount": "87.64",
          "amount_set": {
            "shop_money": {
              "amount": "87.64",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "87.64",
              "currency_code": "USD"
            }
          },
          "discount_application_index": 0
        }
      ]
    },
    {
      "id": 14771597607147,
      "admin_graphql_api_id": "gid://shopify/LineItem/14771597607147",
      "attributed_staffs": [],
      "current_quantity": 1,
      "fulfillable_quantity": 0,
      "fulfillment_service": "manual",
      "fulfillment_status": "fulfilled",
      "gift_card": false,
      "grams": 0,
      "name": "Custom Rug Pads - Default_cpc_8BDAC4BE36BD4",
      "pre_tax_price": "84.56",
      "pre_tax_price_set": {
        "shop_money": {
          "amount": "84.56",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "84.56",
          "currency_code": "USD"
        }
      },
      "price": "120.80",
      "price_set": {
        "shop_money": {
          "amount": "120.80",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "120.80",
          "currency_code": "USD"
        }
      },
      "product_exists": true,
      "product_id": 8256219087083,
      "properties": [
        {
          "name": "Choose Rug Shape ",
          "value": "Rectangle"
        },
        {
          "name": "Choose Thickness",
          "value": "LUXE LITE felted"
        },
        {
          "name": "Rectangle Width (ft)",
          "value": "8 ft"
        },
        {
          "name": "Rectangle Width (in)",
          "value": "0 in"
        },
        {
          "name": "Rectangle Length (ft)",
          "value": "10 ft"
        },
        {
          "name": "Rectangle Length (in)",
          "value": "0 in"
        },
        {
          "name": "Project Name ",
          "value": "DRUMMOND "
        },
        {
          "name": "Install Location",
          "value": "MASTER BEDROOM"
        }
      ],
      "quantity": 1,
      "requires_shipping": true,
      "sku": "Custom",
      "taxable": true,
      "title": "Custom Rug Pads",
      "total_discount": "0.00",
      "total_discount_set": {
        "shop_money": {
          "amount": "0.00",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "0.00",
          "currency_code": "USD"
        }
      },
      "variant_id": 45768029667563,
      "variant_inventory_management": null,
      "variant_title": "Default_cpc_8BDAC4BE36BD4",
      "vendor": "UNDER IT ALL",
      "tax_lines": [],
      "duties": [],
      "discount_allocations": [
        {
          "amount": "36.24",
          "amount_set": {
            "shop_money": {
              "amount": "36.24",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "36.24",
              "currency_code": "USD"
            }
          },
          "discount_application_index": 0
        }
      ]
    },
    {
      "id": 14771597639915,
      "admin_graphql_api_id": "gid://shopify/LineItem/14771597639915",
      "attributed_staffs": [],
      "current_quantity": 1,
      "fulfillable_quantity": 0,
      "fulfillment_service": "manual",
      "fulfillment_status": "fulfilled",
      "gift_card": false,
      "grams": 0,
      "name": "Custom Rug Pads - Default_cpc_1BB86C8CA93C4",
      "pre_tax_price": "164.94",
      "pre_tax_price_set": {
        "shop_money": {
          "amount": "164.94",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "164.94",
          "currency_code": "USD"
        }
      },
      "price": "235.62",
      "price_set": {
        "shop_money": {
          "amount": "235.62",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "235.62",
          "currency_code": "USD"
        }
      },
      "product_exists": true,
      "product_id": 8256219087083,
      "properties": [
        {
          "name": "Choose Rug Shape ",
          "value": "Rectangle"
        },
        {
          "name": "Choose Thickness",
          "value": "LUXE LITE felted"
        },
        {
          "name": "Rectangle Width (ft)",
          "value": "11 ft"
        },
        {
          "name": "Rectangle Width (in)",
          "value": "0 in"
        },
        {
          "name": "Rectangle Length (ft)",
          "value": "14 ft"
        },
        {
          "name": "Rectangle Length (in)",
          "value": "0 in"
        },
        {
          "name": "Project Name ",
          "value": "DRUMMOND "
        },
        {
          "name": "Install Location",
          "value": "LIVING ROOM"
        }
      ],
      "quantity": 1,
      "requires_shipping": true,
      "sku": "Custom",
      "taxable": true,
      "title": "Custom Rug Pads",
      "total_discount": "0.00",
      "total_discount_set": {
        "shop_money": {
          "amount": "0.00",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "0.00",
          "currency_code": "USD"
        }
      },
      "variant_id": 45768027832555,
      "variant_inventory_management": null,
      "variant_title": "Default_cpc_1BB86C8CA93C4",
      "vendor": "UNDER IT ALL",
      "tax_lines": [],
      "duties": [],
      "discount_allocations": [
        {
          "amount": "70.68",
          "amount_set": {
            "shop_money": {
              "amount": "70.68",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "70.68",
              "currency_code": "USD"
            }
          },
          "discount_application_index": 0
        }
      ]
    },
    {
      "id": 14771597672683,
      "admin_graphql_api_id": "gid://shopify/LineItem/14771597672683",
      "attributed_staffs": [],
      "current_quantity": 1,
      "fulfillable_quantity": 0,
      "fulfillment_service": "manual",
      "fulfillment_status": "fulfilled",
      "gift_card": false,
      "grams": 0,
      "name": "Custom Rug Pads - Default_cpc_1611FB9B488B4",
      "pre_tax_price": "115.67",
      "pre_tax_price_set": {
        "shop_money": {
          "amount": "115.67",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "115.67",
          "currency_code": "USD"
        }
      },
      "price": "165.24",
      "price_set": {
        "shop_money": {
          "amount": "165.24",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "165.24",
          "currency_code": "USD"
        }
      },
      "product_exists": true,
      "product_id": 8256219087083,
      "properties": [
        {
          "name": "Choose Rug Shape ",
          "value": "Rectangle"
        },
        {
          "name": "Choose Thickness",
          "value": "LUXE LITE felted"
        },
        {
          "name": "Rectangle Width (ft)",
          "value": "9 ft"
        },
        {
          "name": "Rectangle Width (in)",
          "value": "0 in"
        },
        {
          "name": "Rectangle Length (ft)",
          "value": "12 ft"
        },
        {
          "name": "Rectangle Length (in)",
          "value": "0 in"
        },
        {
          "name": "Project Name ",
          "value": "RINGSBY "
        },
        {
          "name": "Install Location",
          "value": ""
        }
      ],
      "quantity": 1,
      "requires_shipping": true,
      "sku": "Custom",
      "taxable": true,
      "title": "Custom Rug Pads",
      "total_discount": "0.00",
      "total_discount_set": {
        "shop_money": {
          "amount": "0.00",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "0.00",
          "currency_code": "USD"
        }
      },
      "variant_id": 45768179712235,
      "variant_inventory_management": null,
      "variant_title": "Default_cpc_1611FB9B488B4",
      "vendor": "UNDER IT ALL",
      "tax_lines": [],
      "duties": [],
      "discount_allocations": [
        {
          "amount": "49.57",
          "amount_set": {
            "shop_money": {
              "amount": "49.57",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "49.57",
              "currency_code": "USD"
            }
          },
          "discount_application_index": 0
        }
      ]
    },
    {
      "id": 14771597705451,
      "admin_graphql_api_id": "gid://shopify/LineItem/14771597705451",
      "attributed_staffs": [],
      "current_quantity": 6,
      "fulfillable_quantity": 0,
      "fulfillment_service": "manual",
      "fulfillment_status": "fulfilled",
      "gift_card": false,
      "grams": 0,
      "name": "Custom Rug Pads - Default_cpc_147783211F4F4",
      "pre_tax_price": "694.01",
      "pre_tax_price_set": {
        "shop_money": {
          "amount": "694.01",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "694.01",
          "currency_code": "USD"
        }
      },
      "price": "165.24",
      "price_set": {
        "shop_money": {
          "amount": "165.24",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "165.24",
          "currency_code": "USD"
        }
      },
      "product_exists": true,
      "product_id": 8256219087083,
      "properties": [
        {
          "name": "Choose Rug Shape ",
          "value": "Rectangle"
        },
        {
          "name": "Choose Thickness",
          "value": "LUXE LITE felted"
        },
        {
          "name": "Rectangle Width (ft)",
          "value": "9 ft"
        },
        {
          "name": "Rectangle Width (in)",
          "value": "0 in"
        },
        {
          "name": "Rectangle Length (ft)",
          "value": "12 ft"
        },
        {
          "name": "Rectangle Length (in)",
          "value": "0 in"
        },
        {
          "name": "Project Name ",
          "value": "STOCK"
        },
        {
          "name": "Install Location",
          "value": ""
        }
      ],
      "quantity": 6,
      "requires_shipping": true,
      "sku": "Custom",
      "taxable": true,
      "title": "Custom Rug Pads",
      "total_discount": "0.00",
      "total_discount_set": {
        "shop_money": {
          "amount": "0.00",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "0.00",
          "currency_code": "USD"
        }
      },
      "variant_id": 45768184529131,
      "variant_inventory_management": null,
      "variant_title": "Default_cpc_147783211F4F4",
      "vendor": "UNDER IT ALL",
      "tax_lines": [],
      "duties": [],
      "discount_allocations": [
        {
          "amount": "297.43",
          "amount_set": {
            "shop_money": {
              "amount": "297.43",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "297.43",
              "currency_code": "USD"
            }
          },
          "discount_application_index": 0
        }
      ]
    },
    {
      "id": 14771597738219,
      "admin_graphql_api_id": "gid://shopify/LineItem/14771597738219",
      "attributed_staffs": [],
      "current_quantity": 6,
      "fulfillable_quantity": 0,
      "fulfillment_service": "manual",
      "fulfillment_status": "fulfilled",
      "gift_card": false,
      "grams": 0,
      "name": "Custom Rug Pads - Default_cpc_72A1CF04CFF54",
      "pre_tax_price": "507.36",
      "pre_tax_price_set": {
        "shop_money": {
          "amount": "507.36",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "507.36",
          "currency_code": "USD"
        }
      },
      "price": "120.80",
      "price_set": {
        "shop_money": {
          "amount": "120.80",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "120.80",
          "currency_code": "USD"
        }
      },
      "product_exists": true,
      "product_id": 8256219087083,
      "properties": [
        {
          "name": "Choose Rug Shape ",
          "value": "Rectangle"
        },
        {
          "name": "Choose Thickness",
          "value": "LUXE LITE felted"
        },
        {
          "name": "Rectangle Width (ft)",
          "value": "8 ft"
        },
        {
          "name": "Rectangle Width (in)",
          "value": "0 in"
        },
        {
          "name": "Rectangle Length (ft)",
          "value": "10 ft"
        },
        {
          "name": "Rectangle Length (in)",
          "value": "0 in"
        },
        {
          "name": "Project Name ",
          "value": "STOCK"
        },
        {
          "name": "Install Location",
          "value": ""
        }
      ],
      "quantity": 6,
      "requires_shipping": true,
      "sku": "Custom",
      "taxable": true,
      "title": "Custom Rug Pads",
      "total_discount": "0.00",
      "total_discount_set": {
        "shop_money": {
          "amount": "0.00",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "0.00",
          "currency_code": "USD"
        }
      },
      "variant_id": 45768186691819,
      "variant_inventory_management": null,
      "variant_title": "Default_cpc_72A1CF04CFF54",
      "vendor": "UNDER IT ALL",
      "tax_lines": [],
      "duties": [],
      "discount_allocations": [
        {
          "amount": "217.44",
          "amount_set": {
            "shop_money": {
              "amount": "217.44",
              "currency_code": "USD"
            },
            "presentment_money": {
              "amount": "217.44",
              "currency_code": "USD"
            }
          },
          "discount_application_index": 0
        }
      ]
    }
  ],
  "payment_terms": null,
  "refunds": [],
  "shipping_address": {
    "first_name": "MATT",
    "address1": "3413 FREDERICA RD",
    "phone": null,
    "city": "ST SIMONS ISLAND",
    "zip": "31522",
    "province": "Georgia",
    "country": "United States",
    "last_name": "DART",
    "address2": null,
    "company": null,
    "latitude": 31.187026,
    "longitude": -81.377458,
    "name": "MATT DART",
    "country_code": "US",
    "province_code": "GA"
  },
  "shipping_lines": [
    {
      "id": 4822362226923,
      "carrier_identifier": "650f1a14fa979ec5c74d063e968411d4",
      "code": "Economy",
      "discounted_price": "209.00",
      "discounted_price_set": {
        "shop_money": {
          "amount": "209.00",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "209.00",
          "currency_code": "USD"
        }
      },
      "is_removed": false,
      "phone": null,
      "price": "209.00",
      "price_set": {
        "shop_money": {
          "amount": "209.00",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "209.00",
          "currency_code": "USD"
        }
      },
      "requested_fulfillment_service_id": null,
      "source": "shopify",
      "title": "Economy",
      "tax_lines": [],
      "discount_allocations": []
    }
  ]
};