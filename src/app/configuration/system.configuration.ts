import { HttpHeaders } from "@angular/common/http";

export class SystemConfiguration {
  public static HTTP_OPTIONS = { headers: new HttpHeaders({
      "Content-Type": "application/json",
    }) };

  public static FILE_UPLOAD_HTTP_OPTIONS = { headers: new HttpHeaders(
      { "Content-Type": "multipart/form-data" }
    ) };

    private static API_URL: string =//"http://empretec-core-api.getitsmart.net/v1/";
                                    "http://localhost:5000/v1/";

    public static NEWS: string = SystemConfiguration.API_URL + "news";
    public static EVENTS: string = SystemConfiguration.API_URL + "events";
    public static GALLERY_IMAGES: string = SystemConfiguration.API_URL + "galleryImages";
  }
