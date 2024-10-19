import { Component, OnInit } from '@angular/core';
import { QrService } from '../../services/qr.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  qrCodeUrl: string | null = null;

  constructor(private qrService: QrService) {}

  ngOnInit(): void {
    this.qrService.getQrForRegistration().subscribe(blob => {
      this.qrCodeUrl = URL.createObjectURL(blob);
    });
  }
}
