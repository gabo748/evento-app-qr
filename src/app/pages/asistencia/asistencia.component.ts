import { Component, OnInit } from '@angular/core';
import { QrService } from '../../services/qr.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss']
})
export class AsistenciaComponent implements OnInit {
  qrCodeUrl: string | null = null;

  constructor(private qrService: QrService) {}

  ngOnInit(): void {
    this.qrService.getQrForAttendance().subscribe(blob => {
      this.qrCodeUrl = URL.createObjectURL(blob);
    });
  }
}
